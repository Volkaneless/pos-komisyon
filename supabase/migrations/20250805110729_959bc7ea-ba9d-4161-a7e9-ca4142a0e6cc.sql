-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  category TEXT NOT NULL DEFAULT 'general',
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create pos_providers table
CREATE TABLE public.pos_providers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  logo TEXT NOT NULL,
  monthly_fee TEXT NOT NULL,
  commission_rate TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pos_providers ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is for a public website)
CREATE POLICY "Anyone can view blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view POS providers" 
ON public.pos_providers 
FOR SELECT 
USING (true);

-- For now, allow unrestricted access for management (you can add authentication later)
CREATE POLICY "Anyone can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Anyone can manage POS providers" 
ON public.pos_providers 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_pos_providers_updated_at
  BEFORE UPDATE ON public.pos_providers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();