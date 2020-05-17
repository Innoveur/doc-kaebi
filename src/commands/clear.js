import * as msgConsts  from "../constants/bot-messages";

export const clear = {
    name: "clear",
    description: "Deletes all messages in the current channel",
    content: false,
    persistCommand: true,
    execute: async (message, clearLimit) => {
        if (!clearLimit && clearLimit !== 0) {
            clearLimit = 100;
        } else if (isNaN(clearLimit) || clearLimit > 100 || clearLimit < 1) {
            await message.delete();
            message.reply(msgConsts.INVALID_CLEAR_ARGS);
            return;
        }
        try {
            const filterOld = true;
            await message.delete();
            message.channel.bulkDelete(clearLimit, filterOld);
        } catch (error) {
            message.reply(msgConsts.EXECUTION_ERROR);
        }
    },
};