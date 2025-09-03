package com.payroll.service.impl;

import com.payroll.dto.DepartmentDto;
import com.payroll.exception.ResourceNotFoundException;
import com.payroll.model.Department;
import com.payroll.repository.DepartmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DepartmentServiceImplTest {

    @Mock
    private DepartmentRepository departmentRepository;

    @InjectMocks
    private DepartmentServiceImpl departmentService;

    private Department department;
    private DepartmentDto departmentDto;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        department = new Department();
        department.setDepartmentId(1L);
        department.setDepartmentName("IT");
        department.setDescription("Tech department");
        department.setEmployees(Collections.emptyList());

        departmentDto = new DepartmentDto();
        departmentDto.setDepartmentId(1L);
        departmentDto.setDepartmentName("IT");
        departmentDto.setDescription("Tech department");
    }

    @Test
    void testGetAllDepartments() {
        when(departmentRepository.findAll()).thenReturn(List.of(department));

        List<DepartmentDto> result = departmentService.getAllDepartments();

        assertEquals(1, result.size());
        assertEquals("IT", result.get(0).getDepartmentName());
        verify(departmentRepository, times(1)).findAll();
    }

    @Test
    void testGetDepartmentById_Found() {
        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));

        DepartmentDto result = departmentService.getDepartmentById(1L);

        assertNotNull(result);
        assertEquals("IT", result.getDepartmentName());
        verify(departmentRepository, times(1)).findById(1L);
    }

    @Test
    void testGetDepartmentById_NotFound() {
        when(departmentRepository.findById(2L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> departmentService.getDepartmentById(2L));
    }

    @Test
    void testCreateDepartment_Success() {
        when(departmentRepository.existsByDepartmentName("IT")).thenReturn(false);
        when(departmentRepository.save(any(Department.class))).thenReturn(department);

        DepartmentDto result = departmentService.createDepartment(departmentDto);

        assertNotNull(result);
        assertEquals("IT", result.getDepartmentName());
        verify(departmentRepository).save(any(Department.class));
    }

    @Test
    void testCreateDepartment_DuplicateName() {
        when(departmentRepository.existsByDepartmentName("IT")).thenReturn(true);

        assertThrows(RuntimeException.class,
                () -> departmentService.createDepartment(departmentDto));
    }

    @Test
    void testUpdateDepartment_Success() {
        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));
        when(departmentRepository.existsByDepartmentName("IT")).thenReturn(false);
        when(departmentRepository.save(any(Department.class))).thenReturn(department);

        DepartmentDto result = departmentService.updateDepartment(1L, departmentDto);

        assertNotNull(result);
        assertEquals("IT", result.getDepartmentName());
        verify(departmentRepository).save(any(Department.class));
    }

    @Test
    void testUpdateDepartment_NotFound() {
        when(departmentRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> departmentService.updateDepartment(99L, departmentDto));
    }

    @Test
    void testUpdateDepartment_DuplicateName() {
        Department anotherDept = new Department();
        anotherDept.setDepartmentId(2L);
        anotherDept.setDepartmentName("Finance");
        anotherDept.setDescription("Money dept");

        departmentDto.setDepartmentName("Finance");

        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));
        when(departmentRepository.existsByDepartmentName("Finance")).thenReturn(true);

        assertThrows(RuntimeException.class,
                () -> departmentService.updateDepartment(1L, departmentDto));
    }

    @Test
    void testDeleteDepartment_Success() {
        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));

        departmentService.deleteDepartment(1L);

        verify(departmentRepository, times(1)).delete(department);
    }

    @Test
    void testDeleteDepartment_NotFound() {
        when(departmentRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class,
                () -> departmentService.deleteDepartment(99L));
    }

    @Test
    void testDeleteDepartment_WithEmployees() {
        department.setEmployees(List.of(new Object())); // simulate assigned employees
        when(departmentRepository.findById(1L)).thenReturn(Optional.of(department));

        assertThrows(RuntimeException.class,
                () -> departmentService.deleteDepartment(1L));
    }
}
