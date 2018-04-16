const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = ("Mr")
bot.on('ready', function() {
    //message.member.addRole('Membres').then(console.log).catch(console.error);
    bot.user.setGame(`Mrhelp${bot.guilds.size} serveurs et ${bot.users.size} utilisateurs`)
    console.log(`Connecté`);
});
//command bot!
bot.on('message', message =>{
//help command
    if(message.content === prefix + "help"){
        message.reply("Je vais t'aidé tien la liste des commands:\nMrhelp\n Mrping\n Mrban\n Mrkick");
        message.channel.sendMessage("Les commands Mrkick, Mrban ne sont autorisé que par les admins")
    };
//kick command
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();
    if(command === "kick"){
        let modRole = message.guild.roles.find("name", "Admin")
        if(!message.member.roles.has(modRole.id)){
            return MessageEmbed.reply("Désolé mais tu n'est pas admin va sur le #recrutement-staff et tante de deveminir admin.").catch(console.error);
        };
        if(message.mentions.users.size === 0){
            return message.reply("Tu a oublié de mentionner une personne merci de le faire.").catch(console.error);
        };
        let kickMembre = message.guild.member(message.mentions.users.first());
        if(!kickMembre){
            return message.reply("Désolé mais l'utilisateur n'ai pas sur se serveur.");
        };
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply("Je n'ai pas l'autorisation de le Kick.").catch(console.error)
        };
        kickMembre.kick().then(member => {
            message.reply("Le membre à bien êtait kick.").catch(console.error);
        });
    };
//ban command
    if(command === "ban"){
        let modRole = message.guild.roles.find("name", "Admin")
        if(!message.member.roles.has(modRole.id)){
            return MessageEmbed.reply("Désolé mais tu n'est pas admin va sur le #recrutement-staff et tante de deveminir admin.").catch(console.error);
        };
        const member = message.mentions.members.first();
        if (!member) return message.reply("Tu a oublié de mentionner une personne merci de le faire.");
        member.ban().then(member => {
           message.reply(`Le membre à bien êtait ban`).catch(console.error);
        });
    }
});

bot.login('NDIzNDc1NjIyMTQ5NDg4NjQx.DY7-EA.jE3iop-C7q_jNQBjLF0jupkb9d8'); 
