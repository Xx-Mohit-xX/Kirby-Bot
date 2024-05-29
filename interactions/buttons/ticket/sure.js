module.exports = {
  id: "sure",
  async execute (client, interaction) {
    
    await interaction.channel.delete()
    
  }
}