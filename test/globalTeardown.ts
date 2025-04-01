import 'tsconfig-paths/register';

export default async function globalTeardown() {
    const app = global.__APP__;

    if (app) {
        await app.close();
    }
}
