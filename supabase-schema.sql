-- Create the waitlist table in Supabase
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100) NOT NULL,
  centre_name VARCHAR(200),
  location VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add unique constraint to prevent duplicate phone numbers (only if phone is provided)
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_phone_unique ON waitlist(phone) WHERE phone IS NOT NULL;

-- Add unique constraint to prevent duplicate emails
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_unique ON waitlist(email);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS waitlist_location_idx ON waitlist(location);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (for clean setup)
DROP POLICY IF EXISTS "Allow public insert" ON waitlist;
DROP POLICY IF EXISTS "Allow authenticated read" ON waitlist;
DROP POLICY IF EXISTS "allow_public_insert" ON waitlist;
DROP POLICY IF EXISTS "allow_authenticated_select" ON waitlist;
DROP POLICY IF EXISTS "allow_public_select" ON waitlist;

-- Create policy to allow inserts from anyone (both anonymous and authenticated users)
CREATE POLICY "allow_public_insert"
  ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow public (anonymous) users to read records
CREATE POLICY "allow_public_select"
  ON waitlist
  FOR SELECT
  USING (true);

-- Create policy to allow authenticated users full access (for admin panels)
CREATE POLICY "allow_authenticated_select"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
