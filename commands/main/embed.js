/**
 * @file Sample ping command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

const embed = require("./../../functions/embed")

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "embed",
	description: "create an embed to send it into a channel",
    aliases: ["ebuilder", "embed-builder"],
    usage: "embed",
	execute(client, message, args) {
		
  embed(message,  {
      name: "Kirby's",
      footer: "Kirby's Embed Builder"
  })      

	},
};
