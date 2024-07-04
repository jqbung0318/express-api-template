import * as process from 'process';
export const env = process.env;

type Config = {
    PostgresURL: string;
}

const config: Config = {
    PostgresURL: process.env.DRIZZLE_DB ?? "",
}

export default config;