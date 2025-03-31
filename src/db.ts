
import { Pool } from 'pg';

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'e_learning',
  password: 'your_secure_password',
  port: 5432, // Default PostgreSQL port
});

// Simple query function to interact with PostgreSQL
export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
