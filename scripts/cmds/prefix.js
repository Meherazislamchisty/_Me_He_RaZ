const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "2.0",
		author: "Chitron Bhattacharjee",
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "Change bot's prefix in chat or globally"
		},
		description: {
			en: "Customize the command prefix for your chat or system (admin only)"
		},
		category: "config",
		guide: {
			en: `
ðŸŒ¸ Usage:
+prefix <new> â†’ Set new prefix in this group
+prefix <new> -g â†’ Set global prefix (admin only)
+prefix reset â†’ Reset prefix to default

ðŸ§¸ Examples:
+prefix #
+prefix $ -g
+prefix reset`
		}
	},

	langs: {
		en: {
			reset: "ðŸ’  Your prefix has been reset to default: ã€ %1 ã€‘",
			onlyAdmin: "â›” Only bot admin can set global prefix!",
			confirmGlobal: "ðŸŒ Please react to confirm global prefix change~",
			confirmThisThread: "ðŸ’¬ Please react to confirm group prefix change~",
			successGlobal: "âœ… Global prefix successfully changed to: ã€Ž %1 ã€",
			successThisThread: "âœ… Group prefix successfully changed to: ã€Ž %1 ã€",
			myPrefix: `
â•­â”€â”€â”€[ ðŸŒ¸ ð’«ð“‡ð‘’ð’»ð’¾ð“ ð’¾ð“ƒð’»ð‘œ ]â”€â”€â”€â•®
â”‚ âœ¨ ðµð‘œð“‰ ð’©ð’¶ð“‚ð‘’: ð‘†ð»ð¼ð’«ð’° ð’œð¼
â”‚ ðŸŒ ð’®ð“Žð“ˆð“‰ð‘’ð“‚ ð’«ð“‡ð‘’ð’»ð’¾ð“: %1
â”‚ ðŸ’¬ ð’žð’½ð’¶ð“‰ ð’«ð“‡ð‘’ð’»ð’¾ð“: %2
â”‚ ðŸ§šâ€â™€ï¸ ð’Ÿð‘’ð“‹: Chitron Bhattacharjee
â”‚ ðŸ“ ð’¯ð’¾ð“…: Type +help for commands
â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â•¯`
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0]) return message.SyntaxError();

		if (args[0].toLowerCase() === 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g") {
			if (role < 2) return message.reply(getLang("onlyAdmin"));
			formSet.setGlobal = true;
		} else {
			formSet.setGlobal = false;
		}

		return message.reply(
			formSet.setGlobal ? getLang("confirmGlobal") : getLang("confirmThisThread"),
			(err, info) => {
				formSet.messageID = info.messageID;
				global.GoatBot.onReaction.set(info.messageID, formSet);
			}
		);
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author) return;

		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		} else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body?.toLowerCase() === "prefix") {
			return message.reply(getLang(
				"myPrefix",
				global.GoatBot.config.prefix,
				utils.getPrefix(event.threadID)
			));
		}
	}
};
