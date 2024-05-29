const {EmbedBuilder,  ActionRowBuilder,  ButtonStyle,  ButtonBuilder,  ChannelType } = require("discord.js")

module.exports = {
  id: "question01",
  async execute(client, interaction) {
   const topic = `Question Ticket has been opened by <@${interaction.user.id}>`; 
  
const check = await interaction.guild.channels.cache.find( 
       (ch) => (ch).topic === topic); 
  
if (check) { 
  
  interaction.reply({ content: `You have an pre-existing ticket opened (${check.toString()}). Close it before creating a new one.` 
}); 

} else if (!check) {
    
const chan = await interaction.guild.channels.create({
            name: `question-${interaction.user.tag}`,
            topic: topic,
            type: ChannelType.GuildText,
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
            .setTitle('Question Ticket')
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
            content: `Question ticket created!` + `<#${chan.id}>`, ephemeral: true
        })
  } 
  }
}
