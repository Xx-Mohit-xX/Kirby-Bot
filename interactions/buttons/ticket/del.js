/**
 * @file Sample button interaction
 * @author Naman Vrati
 * @since 3.0.0
 * @version 3.2.2
 */
const {ActionRowBuilder,  ButtonBuilder,  ButtonStyle, EmbedBuilder } = require("discord.js")
/**
 * @type {import('../../../typings').ButtonInteractionCommand}
 */
module.exports = {
	id: "del",

	async execute(client, interaction) {

    const transEmbed = new EmbedBuilder()
        .setColor(client.color).setTitle(`Hey` + ` ` + interaction.user.username)
        .setDescription(`Are you sure you want to delete **this** ticket ?`)
    
		const ok = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sure')
                    .setLabel(`Delete`)
                    .setStyle(ButtonStyle.Danger),
            )

        await interaction.reply({ embeds: [transEmbed], components: [ok] })
	},
};
