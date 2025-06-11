module.exports = {
config: {
name: "meheraz",
version: "1.0",
author: "aYan",
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "no prefix",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "meheraz"" chisty") {
return message.reply({
body: " ──────────◊\n‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  \n\n‣ 𝐍𝐚𝐦𝐞: 𝗠𝗘𝗛𝗘𝗥𝗔𝗭                           ‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:𝐶ℎ𝑖𝑠𝑡𝑦'𝑠 𝐵𝑏'𝑧😘 ",
attachment: await global.utils.getStreamFromURL("https://files.catbox.moe/7tfxcz.jpg")
});
}
}
}
