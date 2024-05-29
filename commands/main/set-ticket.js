const { Client, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'set-tickets',
    description: 'Set a ticket channel',
    aliases: ["set ticket"],
    usage: `<set-ticket>`,
    
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    async execute (client, message, args) {
        const ticketstart = new EmbedBuilder()
            .setTitle("Create a ticket").setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription("Choose the category you need help on our __Select Menu__ so we can assist you! \n**_NOTE:_** You need to select `Reload` option too because of the latest discord update ")
            .setFooter({text: message.guild.name, iconURL: message.guild.iconURL()}).setColor(client.color)
          .setTimestamp()

        const supprot = new StringSelectMenuBuilder()
            .setCustomId('support')
            .setPlaceholder('Make a Selection')
            .setMinValues(2)
            .setMaxValues(3)
            .addOptions(
                {
                    label: 'Reload',
                    description: 'Select this option before continuing',
                    value: 'reload01'
                },
                {
                    label: 'Support',
                    description: 'This is to directly resulve your issue',
                    value: 'support01'
                },
                {
                    label: 'Contact staff',
                    description: 'This is to directly talk with staff member ',
                    value: 'staff01'
                },
                {
                    label: 'Question',
                    description: 'This is to directly get answer to your question',
                    value: 'question01',
                },
            )

        const row = new ActionRowBuilder().addComponents(supprot)
        message.reply({ embeds: [ticketstart], components: [row] });
    }
          }