module.exports = {
  config: {
    name: "wife",
    version: "1.0",
    author: "xovhi",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function () { },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "raad's wifey") {
      return message.reply({
        body:
          "╭─────────────╮\n" +
          "  ʚ💗ɞ Sabrina'𝐬 𝐖𝐢𝐟𝐞𝐲 ɞ💗ɞ\n" +
          "╰─────────────╯\n\n" +
          "✨ 𝑯𝒆𝒚! 𝑳𝒐𝒐𝒌 𝒘𝒉𝒐'𝒔 𝒉𝒆𝒓𝒆...\n" +
          "MEHERAZ'𝐬 𝐜𝐮𝐭𝐞 𝐥𝐢𝐭𝐭𝐥𝐞 𝐩𝐫𝐢𝐧𝐜𝐞𝐬𝐬 ❀\n\n" +
          "───────⋆⋅☆⋅⋆───────\n" +
          "『 𝓑𝓸𝓽 :  』",
        attachment: await global.utils.getStreamFromURL("https://files.catbox.moe/w8skxr.mp4")
      });
    }
  }
};
