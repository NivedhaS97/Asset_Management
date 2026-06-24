import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 text-lg font-bold text-white">
            N
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Reset your password</p>
            <p className="text-sm text-slate-500">We will send a recovery link to your email</p>
          </div>
        </div>

        <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <button className="mt-5 w-full rounded-lg bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-800">
          Send reset link
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Back to{' '}
          <Link to="/login" className="font-medium text-teal-600 hover:text-teal-700">
            login
          </Link>
        </p>
      </div>
    </div>
  )
}
