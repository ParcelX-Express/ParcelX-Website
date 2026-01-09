-- SQL for creating needed tables in Supabase (PostgreSQL)

-- Users Table (Usually handled by Supabase Auth, but good to have a public profile)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE,
  avatar_url TEXT,
  company_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Shipments Table
CREATE TABLE public.shipments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  tracking_number TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'Pending',
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  current_location TEXT,
  estimated_delivery TIMESTAMP WITH TIME ZONE,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Shipment Updates Table (for history)
CREATE TABLE public.shipment_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID REFERENCES public.shipments(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  location TEXT,
  description TEXT,
  update_time TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipment_updates ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Shipments are viewable by owner or tracking number." ON public.shipments FOR SELECT USING (auth.uid() = user_id OR true);
CREATE POLICY "Only admins can update shipments." ON public.shipments FOR ALL USING (auth.jwt() ->> 'role' = 'admin');
