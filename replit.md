# ParcelX Website

## Overview
ParcelX is a global shipping and delivery platform with real-time tracking. This is a React-based frontend application.

## Project Architecture
- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS
- **Routing**: React Router DOM v6

## Project Structure
```
/
├── src/
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Tailwind CSS imports
│   └── pages/
│       ├── Home.jsx       # Landing page
│       ├── Login.jsx      # User login
│       ├── Signup.jsx     # User registration
│       ├── Dashboard.jsx  # Shipment dashboard
│       └── TrackShipment.jsx  # Shipment tracking
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## Running the Application
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`

## Routes
- `/` - Home page
- `/login` - Login page
- `/signup` - Registration page
- `/dashboard` - User dashboard
- `/track-shipment` - Shipment tracking

## Recent Changes
- 2026-01-09: Initial setup - restructured project for Vite/React environment
