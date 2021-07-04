const Discord = require('discord.js');
const mineflayer = require('mineflayer');
const client = new Discord.Client();

let prefix = ".";
let bot = mineflayer.createBot({
    version: "1.16.5",
    host: "minehut.com",
    username: "corbiNdodez@gmail.com",
    password: "Nibroc95!"
})

client.on("ready", async => {
    console.log('discord bot online!')
})

bot.on("login", async => {
    console.log('minecraft bot online!')
})


bot.on('chat', (username, message) => {
    console.log('recived message!')
    if (message.includes('join')) {
        let channel = client.channels.cache.get('861036037089394688')
        channel.send(`${username}: ${message}`)
    }
  })

bot.on('kicked', (reason, loggedin) => {
    let bot = mineflayer.createBot({
        version: "1.16.5",
        host: "minehut.com",
        username: "corbiNdodez@gmail.com",
        password: "Nibroc95!"
    })
    console.log('kicked! rejoining...')
})

client.login('ODYxMDM3Nzg4NTY0MTYwNTUy.YOD97g.j796Yv1KeEVMG1aR53QJS9sR6N0') 
