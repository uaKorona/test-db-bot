import {EnvInterface} from "./env.interface.js";

const {
    PRODUCTION,
    PALUNDRA_BOT_TOKEN, TEST_BOT_TOKEN,
} = process.env as Record<string, string>;

export const ENV_CONFIG: EnvInterface = {
    PRODUCTION: !!PRODUCTION,
    BOT_TOKEN: PRODUCTION ? PALUNDRA_BOT_TOKEN: TEST_BOT_TOKEN,
}

const emptyPops = Object
    .keys(ENV_CONFIG)
    .filter((key: string ) => ENV_CONFIG[key as keyof EnvInterface] == null);

if (emptyPops.length) {
    emptyPops.forEach(prop => console.log(prop, 'is empty'));
    if (!ENV_CONFIG.PRODUCTION) {
        throw new Error('env.config is fail!' + JSON.stringify(ENV_CONFIG))
    }
}