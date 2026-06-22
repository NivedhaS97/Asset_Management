import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-slate-900">Asset Management — Frontend (POC)</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Welcome</h2>
          <p className="text-slate-600">This is the frontend scaffold with Tailwind CSS. Connect to the backend API and start implementing pages.</p>
        </section>
      </main>
    </div>
  )
}
