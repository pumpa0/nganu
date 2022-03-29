const { processTime, humanFileSize, isLatestVersion } = require("../../../utils")
const fs = require('fs')
let mulai = fs.statSync('./src/start.txt')
let config = require('../../../src/config.json')
let package = require('../../../package.json')
const os = require('os')
let { info } = require("../../../db")
let { stats } = info('stats')

module.exports = {
    tags: ['others', 'information'],
    cmd: ['ping', 'stat'],
    help: ['ping'],
    exec: async (m, client, { prefix }) => {
        mtime = new Date(mulai.mtime)
        now = new Date()
        let check = await isLatestVersion()
        let text = `*Bot Information*
• Bot Status : 🟢 Online
• Bot Version : ${check.version} is Latest ${check.isLatest}
• Latency : ${processTime(client.timestamp, moment())} _ms_
• Bot Run Time : ${moment.duration((now - mtime) / 1000, 'seconds').humanize()}
• OS Up Time : ${moment.duration(os.uptime(), 'seconds').humanize()}

• AutoPost IG : ${config.autoPost ? '✅' : '❌'}
• AutoRead MSG : ${config.autoRead ? '✅' : '❌'}
• AutoTyping (_mengetik..._) : ${config.composing ? '✅' : '❌'}

*Bot Statistics* :
- Message Received : ${stats.msgRecv}
- Message Sent : ${stats.msgSent}
- Command HIT : ${stats.cmd}
- Downloaded Link : ${stats.autodownload}
- Stickers Created : ${stats.sticker}
- Filesize Sent : ${humanFileSize(stats.filesize, true)}
`
        const btn = [
            { quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } },
            { quickReplyButton: { displayText: `Group Bot`, id: `${prefix}groupbot` } },
            { urlButton: { displayText: `Instagram`, url: `https://www.instagram.com/terserah_bomat` } },
        ]
        client.sendMessage(m.chat, { text, footer: global.footer, templateButtons: btn }, { quoted: m })
    }
}
