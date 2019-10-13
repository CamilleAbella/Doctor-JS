
const fs = require('fs')
const mysql = require('mysql')
const {Client} = require('discord.js')
const Handler = require('doctor-handler')
const config = require('./config.private.json')

const client = new Client()

client.db = mysql.createConnection(config.mysql)
client.commandHandler = new DoctorHandler.CommandHandler(client, './commands')
client.eventHandler = new DoctorHandler.EventHandler(client, './events')
client.login(config.token)

// DoctorHandler va automatiser pas mal de chose, je le code séparément.