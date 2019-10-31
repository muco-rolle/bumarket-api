import * as dotenv from 'dotenv';
import { getPath } from './get-path';

dotenv.config({ path: getPath(process.env.NODE_ENV) });
export const env = {
    get(key: string): string {
        return process.env[key];
    },
};
