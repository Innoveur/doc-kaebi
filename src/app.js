/* eslint-disable no-console */
import "core-js/stable";
import { Client, Collection } from "discord.js";
import dotenv from "dotenv";
import fs from "fs";
import "regenerator-runtime/runtime";
import * as msgConsts from "./constants/bot-messages";
import { db } from "./db/mongoose";

if (dotenv.config() && typeof process.env.BOT_TOKEN === undefined) {
    throw "BOT_TOKEN config is missing. Check if you have created a .env file with the necessary configs";
}

const PREFIX = "!doc";
export const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync("src/commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    import(`./commands/${file}`)
        .then(command => command[file.split(".js")[0]])
        .then(command => client.commands.set(command.name, command))
        .catch(error => console.error(error));
}

client.once("ready", () => console.log("ready"));

client.on("message", async (msg) => {
    if (!msg.content.startsWith(PREFIX)) {
        return;
    }
    await handleOnMessage(msg);
});

db.init();
client.login(process.env.BOT_TOKEN);

async function handleOnMessage(msg) {
    let args = msg.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
    args = args.join(" ");

    if (!await client.commands.has(command)) {
        msg.reply(msgConsts.INVALID_COMMAND);
        return;
    }

    const commandExecutor = client.commands.get(command);
    if (commandExecutor.content && args.length < 1) {
        msg.reply(msgConsts.MISSING_ARGS);
        return;
    }

    try {
        await commandExecutor.execute(msg, args);
        if (!commandExecutor.persistCommand) {
            await msg.delete();
        }
    } catch (error) {
        console.error(error);
        msg.reply(msgConsts.EXECUTION_ERROR);
    }
}