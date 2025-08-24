const { getTime, drive } = global.utils;

if (!global.temp.welcomeEvent) global.temp.welcomeEvent = {};

module.exports = {
        config: {
                name: "welcome",
                version: "2.0",
                author: "BaYjid",
                category: "events"
        },

        langs: {
                vi: {
                        session1: "☀ 𝗦𝗮́𝗻𝗴",
                        session2: "⛅ 𝗧𝗿𝘂̛𝗮",
                        session3: "🌆 𝗖𝗵𝗶𝗲̂̀𝘂",
                        session4: "🌙 𝗧𝗼̂́𝗶",
                        welcomeMessage: "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝑀𝐸𝐻𝐸𝑅𝐴𝑍👾𝐂𝐎𝐎𝐊𝐈𝐄☔︎ 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟𝗟\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡: 𝕄𝕖𝕙𝕖𝕣𝕒𝕫 𝕀𝕤𝕝𝕒𝕞\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/chisty.57\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠: https://www.instagram.com/_chisty_57\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: wa.me/+8801724598086\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━ ",
                        multiple1: "🔹 𝗕𝗮̣𝗻",
                        multiple2: "🔹 𝗖𝗮́𝗰 𝗯𝗮̣𝗻",
                        defaultWelcomeMessage: "🎉 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 {userName} 🎊\n\n🚀 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 𝗯𝗮̣𝗻 𝗱𝗲̂́𝗻 𝘃𝗼̛́𝗶 『 {boxName} 』\n🔹 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗯𝘂𝗼̂̉𝗶 {session} 𝘃𝘂𝗶 𝘃𝗲̉! ✨"
                },
                en: {
                        session1: "☀ 𝓜𝓸𝓻𝓷𝓲𝓷𝓰",
                        session2: "⛅ 𝓝𝓸𝓸𝓷",
                        session3: "🌆 𝓐𝓯𝓽𝓮𝓻𝓷𝓸𝓸𝓷",
                        session4: "🌙 𝓔𝓿𝓮𝓷𝓲𝓷𝓰",
                        welcomeMessage: "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝑀𝐸𝐻𝐸𝑅𝐴𝑍👾𝐂𝐎𝐎𝐊𝐈𝐄☔︎ 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗙𝗨𝗟𝗟\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡: 𝕄𝕖𝕙𝕖𝕣𝕒𝕫 𝕀𝕤𝕝𝕒𝕞\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/chisty.57\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠: https://www.instagram.com/_chisty_57\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: wa.me/+8801724598086\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━ ",
                        multiple1: "🔹 𝖸𝗈𝗎",
                        multiple2: "🔹 𝖸𝗈𝗎 𝖦𝗎𝗒𝗌",
                        defaultWelcomeMessage: "🎉 『 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 』 🎉\n\n💠 𝗛𝗲𝘆 {userName}!\n🔹 𝗬𝗼𝘂 𝗷𝘂𝘀𝘁 𝗷𝗼𝗶𝗻𝗲𝗱 『 {boxName} 』\n⏳ 𝗧𝗶𝗺𝗲 𝗳𝗼𝗿 𝘀𝗼𝗺𝗲 𝗳𝘂𝗻! 𝗛𝗮𝘃𝗲 𝗮 𝗳𝗮𝗻𝘁𝗮𝘀𝘁𝗶𝗰 {session} 🎊\n\n⚠ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗳𝗼𝗹𝗹𝗼𝘄 𝗮𝗹𝗹 𝗴𝗿𝗼𝘂𝗽 𝗿𝘂𝗹𝗲𝘀! 🚀\n\n👤 𝗔𝗱𝗱𝗲𝗱 𝗯𝘆: {adderName}"
                }
        },

        onStart: async ({ threadsData, message, event, api, getLang }) => {
                if (event.logMessageType !== "log:subscribe") return;

                const { threadID, logMessageData } = event;
                const { addedParticipants } = logMessageData;
                const hours = getTime("HH");
                const prefix = global.utils.getPrefix(threadID);
                const nickNameBot = global.GoatBot.config.nickNameBot;

                if (addedParticipants.some(user => user.userFbId === api.getCurrentUserID())) {
                        if (nickNameBot) api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
                        return message.send(getLang("welcomeMessage", prefix));
                }

                if (!global.temp.welcomeEvent[threadID]) {
                        global.temp.welcomeEvent[threadID] = { joinTimeout: null, dataAddedParticipants: [] };
                }

                global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...addedParticipants);

                clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

                global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async () => {
                        const threadData = await threadsData.get(threadID);
                        if (threadData.settings.sendWelcomeMessage === false) return;

                        const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
                        const bannedUsers = threadData.data.banned_ban || [];
                        const threadName = threadData.threadName;

                        let newMembers = [], mentions = [];
                        let isMultiple = dataAddedParticipants.length > 1;

                        for (const user of dataAddedParticipants) {
                                if (bannedUsers.some(banned => banned.id === user.userFbId)) continue;
                                newMembers.push(user.fullName);
                                mentions.push({ tag: user.fullName, id: user.userFbId });
                        }

                        if (newMembers.length === 0) return;

                        // Get info of the adder
                        const adderID = event.author;
                        const adderInfo = await api.getUserInfo(adderID);
                        const adderName = adderInfo[adderID]?.name || "Someone";
                        mentions.push({ tag: adderName, id: adderID });

                        let welcomeMessage = threadData.data.welcomeMessage || getLang("defaultWelcomeMessage");

                        welcomeMessage = welcomeMessage
                                .replace(/\{userName\}|\{userNameTag\}/g, newMembers.join(", "))
                                .replace(/\{boxName\}|\{threadName\}/g, threadName)
                                .replace(/\{multiple\}/g, isMultiple ? getLang("multiple2") : getLang("multiple1"))
                                .replace(/\{session\}/g,
                                        hours <= 10 ? getLang("session1") :
                                        hours <= 12 ? getLang("session2") :
                                        hours <= 18 ? getLang("session3") : getLang("session4")
                                )
                                .replace(/\{adderName\}/g, adderName);

                        let form = {
                                body: welcomeMessage,
                                mentions: mentions
                        };

                        if (threadData.data.welcomeAttachment) {
                                const files = threadData.data.welcomeAttachment;
                                const attachments = files.map(file => drive.getFile(file, "stream"));

                                form.attachment = (await Promise.allSettled(attachments))
                                        .filter(({ status }) => status === "fulfilled")
                                        .map(({ value }) => value);
                        }

                        message.send(form);
                        delete global.temp.welcomeEvent[threadID];
                }, 1500);
        }
};
