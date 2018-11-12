const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('w!setup for setup and w!invite for invite')
});

client.on('message', msg => {
  if (msg.content === 'w!setup') {
    msg.reply('You need to do 2 things to set up this bot! First you want to make 2 channels named welcome and good-bye. And then make a role named Regular.');
  }
});

client.on('message', msg => {
  if (msg.content === 'w!invite') {
    msg.reply('https://discord.gg/BWNpTt9');
  }
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
     if (!channel) return;
     const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(memberavatar)
     .addField('\:bust_in_silhouette: / User: ', `${member}`)
     .addField('\:thumbsup: / Welcome here', `${member}`)
     .addField('\:point_right: / Here you go. A role to you', `Member`)
     .setFooter(`Message sent by Welcomer`)
     .setTimestamp()
  
     channel.sendEmbed(embed);
  
  
    var role = member.guild.roles.find('name', 'Regular');
  
    member.addRole(role)
  });

  client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'good-bye');
    let memberavatar = member.user.avatarURL
     if (!channel) return;
     const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(memberavatar)
     .addField('\:bust_in_silhouette: / User: ', `${member}`)
     .addField('\:thumbsup: / Goodbye!', `${member}`)
     .addField('\:point_right: / Now we are removing his role', `lol`)
     .setFooter(`Message sent by Welcomer`)
     .setTimestamp()
  
     channel.sendEmbed(embed);
  
  
    var role = member.guild.roles.find('name', 'Regular');
  
    member.addRole(role)
  });

client.on('ready', () => {
    console.log('Tjena Derpy! Boten är klar nu!')

});

client.login('process.env.BOT_TOKEN');
