const Discord = require('discord.js')
const client = new Discord.Client({
    intents:32767});

    client.on('ready',()=>{
      console.log('bot online')
      client.user.setActivity('Royal Kingdom Over Power')
      client.user.setStatus('idle')
  })

    const prefix = "#"

    client.on("message", message => {
      if (message.content == ("هايي")) {
 message.reply("هلا فيك/ي نورت يا عسل 🍯")
   } 
})

client.login(process.env.token);
