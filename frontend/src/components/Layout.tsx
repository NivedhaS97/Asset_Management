import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

type LayoutProps = {
  title: string
  subtitle?: string
  active: 'dashboard' | 'assets' | 'reports' | 'settings'
  children: React.ReactNode
}

const navItems = [
  { id: 'dashboard', label: 'Overview', path: '/dashboard' },
  { id: 'assets', label: 'Assets', path: '/assets' },
  { id: 'reports', label: 'Reports', path: '/reports' },
  { id: 'settings', label: 'Settings', path: '/settings' },
] as const

export default function Layout({ title, subtitle, active, children }: LayoutProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col bg-slate-900 px-6 py-8 text-white lg:flex">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 text-lg font-bold">
              AM
            </div>
            <div>
              <p className="text-lg font-semibold">Asset Management</p>
              <p className="text-sm text-slate-400">Asset Suite</p>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive || active === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold">Need help?</p>
            <p className="mt-2 text-sm text-slate-400">Use the admin console for live asset health and approvals.</p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-teal-600">Operations</p>
                <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
                {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
              </div>

              <div className="flex items-center gap-3">
                <label className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search assets
                </label>
                <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 font-semibold text-white"
                >
                  U
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
