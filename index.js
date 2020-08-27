const Discord = require('discord.js');

const bot = new Discord.Client();

const ytdl = require('ytdl-core');

const streamOptions ={seek: 0, volume: 1};

const token = 'NzQ3NjA1OTIzNjg5NjYwNDI2.X0RURg.aSDYEJbjchKddgSXxYwGdzUbGGA';

bot.login(token)
bot.on('ready', () => {
    console.log('Estou Pronto XD')
    bot.user.setActivity(`(EM FASE DE TESTES)', { type: 'PLAYING' });('Eu estou em ${bot.guilds.cache.size} servidores`);
})


bot.on('message', msg => {
    if(msg.content === 'oi'){
        msg.reply('Bem Vindo ao Servidor!')
    }
})
            //comando "oi"


bot.on('message', msg => {
    if(msg.content === 'É a Nova Era!'){
        msg.reply('Bem Vindo ao Novo Império')
    }
})
        //COMANDO "É a Nova Era!"

bot.on('message', msg => {
    if(msg.content === 'Adm corno'){
        msg.reply('Favor não zuar o Administrador, Grato!')
    }
})
            //COMANDO "Adm corno"

    bot.on('message', msg =>{
        if (msg.author.bot) {
            return;
        }

        if (msg.content.toLowerCase().startsWith("?play")) {
            let VoiceChannel = msg.guild.channels.find( channel => channel.id === 
                '747620948739621138');
        
        
            if (VoiceChannel == null){
                console.log('Canal Não encontrado! :(');
            }

            if (VoiceChannel !== null){
                console.log('Entrando! :)')

                VoiceChannel.join()
                .then(connection => {
                    const stream = ytdl('https://www.youtube.com/watch?v=zZOyUn2BUa4', 
                    {filter:'audioonly'});

                    const DJ = connection.playStream(stream, streamOptions);
                    DJ.on('end', end =>{
                        VoiceChannel.leave()
                    });
                })
                .catch(console.error);
        }
    }   

    })

            bot.on('ready', () => {
        console.log(`Logged in as ${bot.user.tag}!`);
      });
      
      bot.on('message', msg => {
        if (msg.content === '!ping') {
          msg.reply(`Pong!, Seu Ping é de:  +${Date.now() - msg.createdTimestamp}` + ' ms');
        }
      });




