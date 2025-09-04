
# PMS Frontend (React + Vite + Bootstrap)

## Folder Structure
```
pms-frontend-vite/
  ├─ index.html
  ├─ package.json
  ├─ vite.config.js
  ├─ .env.example
  └─ src/
     ├─ App.jsx
     ├─ main.jsx
     ├─ styles.css
     ├─ api/
     │  └─ client.js
     ├─ hooks/
     │  └─ useAuth.jsx
     ├─ components/
     │  ├─ Layout.jsx
     │  └─ ThemeToggle.jsx
     └─ pages/
        ├─ _Private.jsx
        ├─ Login.jsx
        ├─ Register.jsx
        ├─ Dashboard.jsx
        ├─ Employees.jsx
        ├─ Departments.jsx
        ├─ JobRoles.jsx
        ├─ Leaves.jsx
        └─ Payroll.jsx
```

## Getting Started
1. Copy `.env.example` to `.env` and set `VITE_API_BASE` (e.g., `http://localhost:8080`).
2. Install deps: `npm install`.
3. Run dev: `npm run dev` (served at http://localhost:3000).
4. Build: `npm run build` then `npm run preview`.

> Make sure your Spring Boot backend is running on port 8080 (or update `VITE_API_BASE`).

## Notes
- JWT is stored in localStorage and attached to requests.
- Role-based routes (ADMIN vs EMPLOYEE) are enforced in the UI.
- Extra features: Theme toggle (light/dark), inline CRUD with toasts, search/filter, period filter for payroll.
