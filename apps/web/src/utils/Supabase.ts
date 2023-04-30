import { createClient } from '@supabase/supabase-js';

import { Config } from './Config';

export const Supabase = createClient(
  'https://jpxcnjehnmxquawxskju.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweGNuamVobm14cXVhd3hza2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExMjU5MTEsImV4cCI6MTk5NjcwMTkxMX0.SRS_OVQ_Dk7ZerauTZQz16rZzoU5l8LPZahHeQiz94I',
);
