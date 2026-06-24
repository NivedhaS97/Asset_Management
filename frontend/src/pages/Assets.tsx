import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const assets = [
  { name: 'MacBook Pro 14', owner: 'Anika', category: 'Laptop', status: 'Assigned', location: 'HQ-03' },
  { name: 'Dell Monitor 27', owner: 'Ravi', category: 'Display', status: 'Available', location: 'Store A' },
  { name: 'Cisco Router', owner: 'Mina', category: 'Network', status: 'Maintenance', location: 'DC-02' },
  { name: 'iPhone 15', owner: 'Suresh', category: 'Mobile', status: 'Assigned', location: 'HQ-01' },
]

export default function Assets() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredAssets = useMemo(() => {
    if (selectedCategory === 'All') {
      return assets
    }

    return assets.filter((asset) => asset.category === selectedCategory)
  }, [selectedCategory])

  const groupedAssets = useMemo(() => {
    return filteredAssets.reduce<Record<string, typeof assets>>((groups, asset) => {
      const existingGroup = groups[asset.category] ?? []
      groups[asset.category] = [...existingGroup, asset]
      return groups
    }, {})
  }, [filteredAssets])

  return (
    <Layout title="Asset inventory" subtitle="Track all company devices and resources" active="assets">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total assets</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">248</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Assigned</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">186</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Due for renewal</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">14</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Recent inventory</h2>
              <p className="text-sm text-slate-500">A live preview of your active asset register.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <span className="font-medium">Category</span>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="bg-transparent text-sm font-medium text-slate-700 outline-none"
                >
                  <option value="All">All</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Display">Display</option>
                  <option value="Network">Network</option>
                  <option value="Mobile">Mobile</option>
                </select>
              </label>
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                Add asset
              </button>
            </div>
          </div>

          {Object.entries(groupedAssets).length === 0 ? (
            <p className="text-sm text-slate-500">No assets match this category filter.</p>
          ) : (
            Object.entries(groupedAssets).map(([category, categoryAssets]) => (
              <div key={category} className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
                  <h3 className="text-sm font-semibold text-slate-800">{category}</h3>
                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-500">
                    {categoryAssets.length} item{categoryAssets.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Owner</th>
                        <th className="px-3 py-3">Category</th>
                        <th className="px-3 py-3">Status</th>
                        <th className="px-3 py-3">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryAssets.map((asset) => (
                        <tr key={asset.name} className="border-b border-slate-100 last:border-0">
                          <td className="px-3 py-3 font-medium text-slate-800">{asset.name}</td>
                          <td className="px-3 py-3 text-slate-600">{asset.owner}</td>
                          <td className="px-3 py-3 text-slate-600">{asset.category}</td>
                          <td className="px-3 py-3">
                            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${asset.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : asset.status === 'Maintenance' ? 'bg-amber-100 text-amber-700' : 'bg-sky-100 text-sky-700'}`}>
                              {asset.status}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-slate-600">{asset.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>Return to</span>
          <Link to="/dashboard" className="font-medium text-teal-600 hover:text-teal-700">
            dashboard
          </Link>
        </div>
      </div>
    </Layout>
  )
}
