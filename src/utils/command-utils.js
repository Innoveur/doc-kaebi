import { Collection } from "discord.js";
import fs from "fs";

export async function getCommandMapAsync(folderPath, modulePath) {
    const commandCollection = new Collection();
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith(".js"));

    if (commandFiles.length < 1) {
        return commandCollection;
    }

    for (const file of commandFiles) {
        let command = await import(`../commands/${modulePath}/${file}`);
        command = command[file.split(".js")[0]];
        commandCollection.set(command.name, command);
    }
    return commandCollection;
}