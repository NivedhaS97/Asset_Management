import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const stats = [
  { label: 'Assets online', value: '142', hint: '+8% this month' },
  { label: 'Pending approvals', value: '12', hint: '3 critical' },
  { label: 'Maintenance due', value: '9', hint: '2 urgent' },
  { label: 'Compliance score', value: '98.4%', hint: 'Excellent' },
]

const actions = [
  { title: 'Review asset inventory', description: 'Browse the full register and assigned devices.', path: '/assets' },
  { title: 'Open reports', description: 'Check utilization, renewals, and SLA trends.', path: '/reports' },
  { title: 'Update settings', description: 'Adjust governance, notifications, and security options.', path: '/settings' },
]

const activity = [
  { title: 'New device assigned', detail: 'MacBook Pro 14 assigned to Anika' },
  { title: 'Maintenance request', detail: 'Cisco Router flagged for review' },
  { title: 'Renewal notice', detail: 'Adobe Creative Cloud is due next week' },
]

export default function Dashboard() {
  return (
    <Layout title="Welcome back, Admin" subtitle="Here’s a snapshot of your asset operations" active="dashboard">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-teal-600">{stat.hint}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
                <p className="text-sm text-slate-500">Latest updates across your operations.</p>
              </div>
              <Link to="/assets" className="text-sm font-medium text-teal-600 hover:text-teal-700">
                View all
              </Link>
            </div>

            <div className="space-y-3">
              {activity.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
            <div className="mt-4 space-y-3">
              {actions.map((action) => (
                <Link key={action.title} to={action.path} className="block rounded-xl border border-slate-200 p-4 transition hover:border-teal-500 hover:bg-teal-50">
                  <p className="font-medium text-slate-800">{action.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{action.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
