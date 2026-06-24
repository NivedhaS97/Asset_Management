# Asset Management - Frontend

This is a Vite + React + TypeScript + **Tailwind CSS** frontend for the NURAL Asset Management application.

## Features

- ✅ Login page with NURAL branding
- ✅ Signup page with form validation
- ✅ Dashboard placeholder
- ✅ React Router for client-side routing
- ✅ Tailwind CSS styling
- ⏳ Asset management pages (coming soon)
- ⏳ Ticket management pages (coming soon)
- ⏳ Reports and dashboards (coming soon)

## Quick Start

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

4. Try the login/signup pages:
   - Go to `/login` or `/signup`
   - Dashboard at `/dashboard` (after login)

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── Dashboard.tsx
│   ├── App.tsx          (routing setup)
│   ├── main.tsx         (React entry)
│   └── styles.css       (Tailwind imports)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Build & Deploy

```bash
npm run build
npm run preview
```

## Next Steps

- Create API client (Axios instance for backend calls)
- Implement asset management pages
- Add state management (Redux or Zustand)
- Connect to FastAPI backend

