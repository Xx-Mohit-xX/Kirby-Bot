/**
 * @file Dynamic help command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.3.0
 */


const axios = require("axios");

// Deconstructing EmbedBuilder to create embeds within this command
const { EmbedBuilder } = require("discord.js");

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "roleplay",
	description: "rp commands like hug, kiss, slap.",
	aliases: ["rp"],
	usage: "[command name]",
	cooldown: 5,
	async execute(client, message, args) {

const array = [
    "Cuddle",
    "Kiss",
    "Hug",
    "Bully",
    "Poke",
    "Kick",
    "Slap",
    "Happy",
    "Kill",
    "Wink",
    "Dance",
    "Cringe",
    "Bite",
    "Handhold",
    "Wave",
    "highfive",
    "Smile",
    "Blush",
    "Yeet",
    "Bonk",
    "Smug",
    "Pat",
    "Lick",
    "Cry"
]
        
const type = args[0]
        
if (!type) {

    const embed = new EmbedBuilder()
    .setTitle("Invalid Agrs")
    .setColor(client.color)
    .setDescription(`Enter a valid agrs from below in the format \`K.rp <type> <mention>\` \n> ${array.join(", ")}`)

    message.reply({embeds: [embed]})
    
}
        
    if (array.find(Type => Type.toLowerCase() === type)){

        const user = message.mentions.users.first()?.username || message.guild.members.cache.get(args[1])

    if(!user) return message.reply({content: `Whom you trying to **${type}** loner!`})
    
        const url = `https://waifu.pics/api/sfw/${type}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
        console.log(e.stack)
            return message.channel.send(`An error occured!`)

        }

        const embed = new EmbedBuilder()
            .setTitle(`${message.author.username} ${type}ed ${user}`)
            .setColor(client.color)
            .setImage(data.url)
            .setFooter({text: `Requested by ${message.author.username}`})

        await message.channel.send({ embeds: [embed] })
    
} else if (array.find(Type => Type.toLowerCase() !== type)) {
    const embed = new EmbedBuilder()
    .setTitle("Invalid Type")
    .setColor(client.color)
    .setDescription(`Enter a valid rp type from below in the format \`K.rp <type> <mention>\` \n> ${array.join(", ")}`)

    message.reply({embeds: [embed]})
    
} 
    }
}