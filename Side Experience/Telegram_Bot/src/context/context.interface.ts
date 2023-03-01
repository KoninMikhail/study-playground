import { Context } from "telegraf";

export interface SessionData {
    botLike: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}