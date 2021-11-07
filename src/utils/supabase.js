import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://gdaxfaeppkyhzrsbkyah.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjI5OTE5NywiZXhwIjoxOTUxODc1MTk3fQ.fpv1kDAuvAHpFwqvTcIaZ3d9QVPd7UAC1WBacC6UMsM'
);
