import { CommandInteraction } from "discord.js";
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Makes the bot say something in text')
        .addStringOption((option: any) => option.setName('text').setDescription('What the bot has to say')),

    async execute(interaction: CommandInteraction) {
        // Get user input for number of sides
        var text = interaction.options.getString('text');
        // Dice should have 6 sides by default
        if(text === null) {
            text = "";
        }
        await interaction.reply(text);
    },
};