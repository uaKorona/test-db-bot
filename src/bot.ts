import {Bot} from "grammy";
import {ENV_CONFIG} from "./env/env.config";

export const bot = new Bot(ENV_CONFIG.BOT_TOKEN);

bot.command("start", async (ctx) => {
    await ctx.reply("Hi! I can only read messages that explicitly reply to me!");
});

bot.on("message", async (ctx) => {
    console.log(ctx.message.from);
    await ctx.reply(`Hello!`);
});