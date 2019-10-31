import { join } from 'path';

export const getPath = (environment: string): string => {
    return join(process.cwd(), `.env.${environment}`);
};
