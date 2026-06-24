import React from 'react'
import Layout from '../components/Layout'

const metrics = [
  { label: 'Active tickets', value: '24', tone: 'bg-sky-100 text-sky-700' },
  { label: 'Maintenance SLA', value: '94%', tone: 'bg-emerald-100 text-emerald-700' },
  { label: 'Budget usage', value: '67%', tone: 'bg-amber-100 text-amber-700' },
]

export default function Reports() {
  return (
    <Layout title="Reports & insights" subtitle="Monitor portfolio health and operational trends" active="reports">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{metric.label}</p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${metric.tone}`}>Updated</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Asset utilization</h2>
                <p className="text-sm text-slate-500">Usage trend for the last 90 days</p>
              </div>
              <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
                Export CSV
              </button>
            </div>

            <div className="flex h-56 items-end gap-3 rounded-xl bg-slate-50 p-4">
              {[38, 62, 74, 52, 81, 91, 78].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-teal-500 to-cyan-400" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Upcoming renewals</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="rounded-lg bg-slate-50 p-3">Adobe Creative Cloud — 4 days</li>
                <li className="rounded-lg bg-slate-50 p-3">Microsoft 365 — 10 days</li>
                <li className="rounded-lg bg-slate-50 p-3">Okta SSO — 18 days</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Compliance score</h3>
              <p className="mt-2 text-4xl font-semibold text-slate-900">98.4%</p>
              <p className="mt-2 text-sm text-slate-500">No critical mismatches in the last 30 days.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
