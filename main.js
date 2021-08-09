const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./tokens.json')

const seskanal = '874217081036472361'

/* Token [1] */
const token1 = new Discord.Client()
token1.login(config.token1)

token1.on('ready', () => {
    client.channels.cache.get(seskanal).join()
    console.log(`[Token1] Ses kanalına katıldı.`)
})

/* Token [2] */
const token2 = new Discord.Client()
token2.login(config.token2)

token2.on('ready', () => {
    client.channels.cache.get(seskanal).join()
    console.log(`[Token2] Ses kanalına katıldı.`)
})

/* Token [3] */
const token3 = new Discord.Client()
token3.login(config.token3)

token3.on('ready', () => {
    client.channels.cache.get(seskanal).join()
    console.log(`[Token3] Ses kanalına katıldı.`)
})

/* Token [4] */
const token4 = new Discord.Client()
token4.login(config.token1)

token4.on('ready', () => {
    client.channels.cache.get(seskanal).join()
    console.log(`[Token4] Ses kanalına katıldı.`)
})
