import { Client } from "discord.js";
import dotenv from "dotenv";

if (dotenv.config() && typeof process.env.BOT_TOKEN === undefined) {
    throw "BOT_TOKEN config is missing. Check if you have created a .env file with the necessary configs";
}

const client = new Client();
client.once("ready", () => console.log("ready"));
client.login(process.env.BOT_TOKEN);
