# ParcelX Website

## Overview
ParcelX is a global shipping and delivery platform with real-time tracking. This is a Next.js application with Supabase authentication.

## Project Architecture
- **Framework**: Next.js 16 with Pages Router
- **Styling**: TailwindCSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)

## Project Structure
```
/
├── pages/
│   ├── _app.js           # App wrapper with global styles
│   ├── index.js          # Landing page
│   ├── login.js          # User login with Supabase auth
│   ├── signup.js         # User registration with Supabase auth
│   ├── dashboard.js      # Shipment dashboard
│   ├── track-shipment.js # Shipment tracking
│   ├── create-shipment.js
│   ├── shipping-rates.js
│   ├── schedule-pickups.js
│   └── shipping-supplies.js
├── lib/
│   └── supabase.js       # Supabase client configuration
├── src/
│   └── index.css         # Tailwind CSS imports
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## Running the Application
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`

## Routes
- `/` - Home page with hero slider and tracking input
- `/login` - Login page with Supabase auth
- `/signup` - Registration page with Supabase auth
- `/dashboard` - User dashboard
- `/track-shipment` - Shipment tracking
- `/create-shipment` - Create new shipment
- `/shipping-rates` - View shipping rates
- `/schedule-pickups` - Schedule pickups
- `/shipping-supplies` - Order shipping supplies
- `/profile` - User profile (requires auth)
- `/admin-tools` - Administrative tools
- `/email-preferences` - Email notification settings
- `/address-book` - Saved addresses
- `/billing` - View and pay bills
- `/reporting` - Shipping reports and analytics

## Database Schema
- `profiles` - User profile data linked to Supabase auth
- `shipments` - Shipment records with tracking
- `tracking_updates` - History of shipment status updates

## Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## Recent Changes
- 2026-01-09: Added profile menu pages (profile, admin-tools, email-preferences, address-book, billing, reporting)
- 2026-01-09: Updated navigation links to point to login/signup pages
- 2026-01-09: Added Supabase authentication to login and signup pages
- 2026-01-09: Created Supabase client configuration
- 2026-01-09: Fixed syntax errors and added allowedDevOrigins for Replit
- 2026-01-09: Initial setup - restructured project for Next.js environment
