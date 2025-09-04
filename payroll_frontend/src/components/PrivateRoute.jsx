
import React from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light')
  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className="btn-group">
      <button className={`btn btn-sm btn-${theme==='light'?'primary':'outline-primary'}`} onClick={()=>setTheme('light')}>☀️</button>
      <button className={`btn btn-sm btn-${theme==='dark'?'primary':'outline-primary'}`} onClick={()=>setTheme('dark')}>🌙</button>
    </div>
  )
}
