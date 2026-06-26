import React from 'react'

type AddAssetModalProps = {
  isOpen: boolean
  onClose: () => void
  formData: {
    name: string
    owner: string
    category: string
    status: string
    location: string
  }
  onChange: (field: string, value: string) => void
  onSubmit: (event: React.FormEvent) => void
  categoryOptions: string[]
  statusOptions: string[]
}

export default function AddAssetModal({
  isOpen,
  onClose,
  formData,
  onChange,
  onSubmit,
  categoryOptions,
  statusOptions,
}: AddAssetModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Add new asset</h3>
            <p className="text-sm text-slate-500">Create a new inventory entry for your team.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Asset name</label>
              <input
                value={formData.name}
                onChange={(event) => onChange('name', event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-teal-500"
                placeholder="Enter asset name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Owner</label>
              <input
                value={formData.owner}
                onChange={(event) => onChange('owner', event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-teal-500"
                placeholder="Assign owner"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
              <select
                value={formData.category}
                onChange={(event) => onChange('category', event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-teal-500"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Status</label>
              <select
                value={formData.status}
                onChange={(event) => onChange('status', event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-teal-500"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
            <input
              value={formData.location}
              onChange={(event) => onChange('location', event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-teal-500"
              placeholder="e.g. HQ-04"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              Cancel
            </button>
            <button type="submit" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
              Save asset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
