
const { MessageEmbed } = require('discord.js');
 
module.exports = {
    name: 'member-count',
    description: 'Shows you the member count of the server!',
 
    async execute(message, args) {
 
        const embed = new MessageEmbed()
        .setTitle('Member Count')
        .setDescription(`We currently have \`${message.guild.memberCount}\` Members in the server!`)
        .setColor('RANDOM')
        .setTimestamp();
 
        message.channel.send(embed);
    }
}
