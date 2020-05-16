export const INVALID_COMMAND = "Error! Error! Invalid command!";
export const MISSING_ARGS = "Missing command arguments, Please contact FatBoy if you are a female he will help you :)";
export const EXECUTION_ERROR = "An error occurred while executing the command :(";
export const CANNOT_EDIT = "You cannot edit that message, what are your trying to do ?";
export const SPECIFY_MESSAGE_ID = "Please specify the message id and the modified message, freakin scrub.";
export const MESSAGE_DOES_NOT_EXIST = " Message does not exist, may have been deleted or not sent at all.";

export function getAllBotMessages() {
    const BOT_MSGS = [];
    BOT_MSGS.push(INVALID_COMMAND);
    BOT_MSGS.push(MISSING_ARGS);
    BOT_MSGS.push(EXECUTION_ERROR);
    BOT_MSGS.push(CANNOT_EDIT);
    BOT_MSGS.push(SPECIFY_MESSAGE_ID);
    BOT_MSGS.push(MESSAGE_DOES_NOT_EXIST);
    return BOT_MSGS;
}
