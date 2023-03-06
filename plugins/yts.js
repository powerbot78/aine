let yts = require('yt-search')
const fs = require ('fs')
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `NAMA LAGU HILANG, SILAHKAN MASUKKAN COMMAND+NAMA/JUDUL LAGU
*\n\n*—CONTOH:*\n*${usedPrefix + command} Begin you`    
try {
let imagen1 = fs.readFileSync('./thumbnail.jpg') 
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `Hasil pencarian dari: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'Silahkan pilih kak',
title: "search result",
buttonText: "[Hasil pencarian]",
sections}
const fake = { quoted: {
key : {
remoteJid: '6282287219167-1614953337@g.us',
participant : '0@s.whatsapp.net'},
message: {
orderMessage: {
itemCount: 9999999,
status: 1,
surface: 1,
message: 'Rezdev.', 
orderTitle: `Rezdev.`,
thumbnailUrl: 'https://i.waifu.pics/KcrOIYV.jpg', 
sellerJid: '0@s.whatsapp.net'}}}}
if (command == 'playlist') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}play ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)}
if (command == 'yts') {
for (let i of search.all) {
listSerch.push({title: i.title, description: `Autor: ${i.author.name} / ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, fake)} 
} catch (e) {
m.reply(`ERROR, SILAKAN COBA LAGI DENGAN NAMA LAGU LAIN`)
console.log(e)
}}
handler.help = ['playlist','yts']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i

module.exports = handler