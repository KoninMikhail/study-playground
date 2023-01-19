import {Markup, Telegraf} from "telegraf";
import {IBotContext} from "../context/context.interface";
import {Command} from "./command.class";

export class StartCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle():void {
        this.bot.start(ctx => {
            ctx.reply(
                'Are you like this bot?',
                Markup.inlineKeyboard([
                    Markup.button.callback('yeah', 'bot_like'),
                    Markup.button.callback('no', 'bot_dislike'),
            ]));
        })

        this.bot.action('bot_like', (ctx) => {
            ctx.session.botLike = true;
            ctx.editMessageText('Cool')
        });

        this.bot.action('bot_dislike', (ctx) => {
            ctx.session.botLike = true;
            ctx.editMessageText('Sad')
        });
    }
}
