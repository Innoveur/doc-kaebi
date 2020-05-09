export const invalidCommand = "Error! Error! Invalid command!";
export const missingArgs = "Missing command arguments, Please contact FatBoy if you are a female he will help you :)";
export const executionError = "An error occurred while executing the command :(";
export const cannotEdit = "You cannot edit that message retard.";
export const specifyMessageId = "Please specify the message id and the modified message, freakin scrub.";
export const messageDoesNotExist = " Message does not exist, may have been deleted or not sent at all.";

export function getAllBotMessages() {
    const botMsgs = [];
    botMsgs.push(invalidCommand);
    botMsgs.push(missingArgs);
    botMsgs.push(executionError);
    botMsgs.push(cannotEdit);
    botMsgs.push(specifyMessageId);
    botMsgs.push(messageDoesNotExist);
    return botMsgs;
}
