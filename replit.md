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
- `profiles` - User profile data linked to Supabase auth (includes first_name, last_name, country, contact_address, country_code, phone_number, receive_updates)
- `shipments` - Shipment records with tracking (includes tracking_number, status, origin, destination, estimated_delivery)
- `tracking_updates` - History of shipment status updates (location, description, status, occurrence_time)

## Required Supabase Setup
Run the following SQL in your Supabase SQL Editor to enable automatic profile creation and proper security:

```sql
-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracking_updates ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read/update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Shipments: Users can manage their own shipments
CREATE POLICY "Users can view own shipments" ON public.shipments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own shipments" ON public.shipments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own shipments" ON public.shipments FOR UPDATE USING (auth.uid() = user_id);

-- Tracking updates: Users can view tracking for their shipments
CREATE POLICY "Users can view tracking updates" ON public.tracking_updates FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.shipments WHERE shipments.id = tracking_updates.shipment_id AND shipments.user_id = auth.uid())
);

-- Auto-create profile on signup trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, full_name, country, contact_address, country_code, phone_number, receive_updates)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'country',
    NEW.raw_user_meta_data->>'contact_address',
    NEW.raw_user_meta_data->>'country_code',
    NEW.raw_user_meta_data->>'phone_number',
    COALESCE((NEW.raw_user_meta_data->>'receive_updates')::boolean, false)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger (drop if exists first)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `BREVO_API_KEY` - Brevo API key for transactional emails
- `BREVO_SENDER` - Sender email address for Brevo
- `BREVO_SENDER_NAME` - Sender name for Brevo emails

## Email Integration
- **Provider**: Brevo (formerly Sendinblue)
- **API Route**: `/api/send-welcome-email` - Sends professional welcome email on signup
- **Template**: Custom HTML template with ParcelX branding

## Recent Changes
- 2026-01-09: Added Brevo email integration for professional welcome emails
- 2026-01-09: Enhanced signup form with additional fields (first name, last name, country, address, phone)
- 2026-01-09: Added loading spinner and success message to signup page
- 2026-01-09: Added profile menu pages (profile, admin-tools, email-preferences, address-book, billing, reporting)
- 2026-01-09: Updated navigation links to point to login/signup pages
- 2026-01-09: Added Supabase authentication to login and signup pages
- 2026-01-09: Created Supabase client configuration
- 2026-01-09: Fixed syntax errors and added allowedDevOrigins for Replit
- 2026-01-09: Initial setup - restructured project for Next.js environment
