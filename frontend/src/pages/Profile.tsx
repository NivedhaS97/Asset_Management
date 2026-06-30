import React, { useState } from 'react'
import Layout from '../components/Layout'

export default function Profile() {
  const [formData, setFormData] = useState({
    fullName: 'David Risley',
    email: 'davidrisky@gmail.com',
    phone: '(234) 8076543321',
    location: 'San Francisco, CA',
    bio: 'Operations manager focused on asset optimization and compliance.',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [tempData, setTempData] = useState(formData)

  const handleEditClick = () => {
    setTempData(formData)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = () => {
    setFormData(tempData)
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTempData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Layout title="Edit Profile" subtitle="Manage your account information" active="profile">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {/* Photo Section */}
          <div className="mb-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-900 text-3xl font-semibold text-white">
                U
              </div>
              {!isEditing && (
                <div>
                  <p className="text-lg font-semibold text-slate-900">{formData.fullName}</p>
                  <p className="text-sm text-slate-500">Administrator Account</p>
                </div>
              )}
            </div>
            {isEditing && (
              <div className="mt-4 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                <p className="text-sm font-medium text-slate-900">Upload new photo</p>
                <p className="mt-1 text-xs text-slate-500">At least 800x800 px recommended. JPG or PNG is allowed.</p>
                <button className="mt-3 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Choose file
                </button>
              </div>
            )}
          </div>

          {/* Personal Info Section */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Personal info</h2>
              {!isEditing && (
                <button
                  onClick={handleEditClick}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Edit
                </button>
              )}
            </div>

            {!isEditing ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Full name</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{formData.fullName}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{formData.email}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Phone</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{formData.phone}</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{formData.location}</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={tempData.fullName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={tempData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={tempData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={tempData.location}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Bio</h2>
              {!isEditing && formData.bio && (
                <button
                  onClick={handleEditClick}
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Edit
                </button>
              )}
            </div>

            {!isEditing ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">{formData.bio}</p>
              </div>
            ) : (
              <textarea
                name="bio"
                value={tempData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                rows={4}
              />
            )}
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
              >
                Save changes
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
