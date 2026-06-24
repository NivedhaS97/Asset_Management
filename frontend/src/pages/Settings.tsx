import React from 'react'
import Layout from '../components/Layout'

export default function Settings() {
  return (
    <Layout title="Settings" subtitle="Manage your workspace preferences and controls" active="settings">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Profile</h2>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-xl font-semibold text-white">
                U
              </div>
              <div>
                <p className="font-medium text-slate-900">User Admin</p>
                <p className="text-sm text-slate-500">admin@assetmanagement.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Notifications</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <label className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3">
                <span>Asset expiry alerts</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
              </label>
              <label className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-3">
                <span>Maintenance reminders</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Security</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-medium text-slate-800">Password policy</p>
              <p className="mt-1">Strong passwords are required for all admin users.</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="font-medium text-slate-800">2FA status</p>
              <p className="mt-1">Enabled for your account.</p>
            </div>
            <button className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              Update security settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
