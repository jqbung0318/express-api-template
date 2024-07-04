import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import config from "@config/index";

const pool = new Pool({
  connectionString: config.PostgresURL,
});

export const db = drizzle(pool);
