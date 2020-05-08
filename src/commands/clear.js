export const clear = {
    name: "clear",
    description: "Deletes all messages in the current channel",
    content: false,
    execute: async (message) => {
        const messages = await message.channel.fetchMessages({ limit: 100 });
        message.channel.bulkDelete(messages);
    },
};