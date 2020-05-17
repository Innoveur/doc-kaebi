/* eslint-disable no-console */
import mongoose from "mongoose";

export const db = {
    init: function () {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        mongoose.connect(process.env.DB_URL, dbOptions);

        mongoose.connection.on("connected", _ => {
            console.log("Mongoose connection successfully opened");
        });

        mongoose.connection.on("err", err => {
            console.error(`Mongoose connection error \n ${err.stack}`);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Mongoose disconnected");
        });
    },
};