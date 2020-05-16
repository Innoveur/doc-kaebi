import * as msgConsts  from "../constants/bot-messages";
import { getContentWithEscapedQuotes } from "../utils/message-utils";
import { client } from "../app.js";

export const edit = {
    name: "it",
    description: "Sends the modified message for the specified message id. This command repalces the original message",
    content: true,
    execute: async (message, content) => {
        const args = content.split(/ +/);
        if (args.length < 2 || !args[0] || !args[1]) {
            message.reply(msgConsts.SPECIFY_MESSAGE_ID);
            return;
        }

        const messageId = args.shift();
        const modifiedContent = args.join(" ");
        let messageToReplace = null;
        try {
            messageToReplace = await message.channel.fetchMessage(messageId);
        } catch (error) {
            console.error(error);
            message.reply(msgConsts.MESSAGE_DOES_NOT_EXIST);
            return;
        }
        const isExist = Object.keys(msgConsts).map(k => msgConsts[k]).some(msg => messageToReplace.content.includes(msg));
        if (isExist){
            message.reply(msgConsts.CANNOT_EDIT);
            return;
        }

        const replacedContent = getContentWithEscapedQuotes(modifiedContent);
        if (messageToReplace.author.id === client.user.id) {
            messageToReplace.edit(replacedContent);
        } else {
            message.channel.send(replacedContent);
            await messageToReplace.delete();
        }
    },
};