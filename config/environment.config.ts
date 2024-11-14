// config/environment.config.ts
interface EnvironmentConfig {
    baseUrl: string;
    timeout: number;
    retries: number;
}

export const environment: EnvironmentConfig = {
    baseUrl: 'https://marsair.recruiting.thoughtworks.net/EngTeongCheah',
    timeout: 30000,
    retries: 2
};