const {EmbedBuilder,  ActionRowBuilder,  ButtonBuilder,  ButtonStyle,  ChannelType} = require("discord.js")

module.exports = {
  id: "staff01",
async execute(client, interaction) {
const topic = `Staff Ticket has been opened by <@${interaction.user.id}>`; 
  
const check = await interaction.guild.channels.cache.find( 
       (ch) => (ch).topic === topic); 
  
if (check) { 
  
  interaction.reply({ content: `You have an pre-existing ticket opened (${check.toString()}). Close it before creating a new one.` 
}); 

} else if (!check) {
const chan = await interaction.guild.channels.create({
            name: `contact-${interaction.user.tag}`,
            type: ChannelType.GuildText,
            topic: topic,
            permissionOverwrites: [
                {
                    id: interaction.message.guild.roles.everyone,
                    deny: ['ViewChannel', 'SendMessages', 'ReadMessageHistory']
                },
                {
                    id: interaction.user.id,
                    allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'],
                },
            ]
        })
        const embed = new EmbedBuilder()
            .setTitle('Contact Staff channel')
            .setDescription('> Thank you for openning a ticket, One of the staff members will be here sortly!')
            .setColor(client.color).setTimestamp()
            .setFooter({text: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true })});
        const del = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('del')
                    .setLabel('Delete Ticket')
                    .setStyle(ButtonStyle.Primary),
            );
        chan.send({
            content: `<@${interaction.user.id}>`,
            embeds: [embed],
            components: [del]
        })
        interaction.reply({
            content: `Contact staff channel created!` + `<#${chan.id}>`, ephemeral: true
        })
}
}

}