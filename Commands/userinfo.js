const Discord = require("discord.js");

module.exports = {
    name:"userinfo",
  run: async (bot, message, args) => {
  var mention = message.mentions.members.first();
  if(!mention) return message.channel.send("Please mention someone to get their user info.")
  const userlol = new Discord.MessageEmbed()
  .setThumbnail(mention.user.avatarURL)
  .setTitle(`User Info`)
  .setColor("RANDOM")
  .addField(`**Name: **`, `${mention.username}`)
  .addField(`**Tag: **`, `${mention.discriminator}`)
  .addField(`**ID: **`, `${mention.id}`)
  .addField(`**Is Bot: **`, `${mention.isBot}`)
  .addField("**Account created at: **", `${mention.user.createdAt}`)
  .addField("**Joined This Server at: **", `${mention.joinedAt}`)
  message.channel.send(userlol)
  console.log(`USERINFO command from ${message.author.username} USER ID= ${message.author}`)
}
}
