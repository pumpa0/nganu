let cap = `Join Group Bot untuk info ter-update

• https://chat.whatsapp.com/IKcqBMcirblBbc9SqpKuPu
`
const buttonsDefault = [
    { urlButton: { displayText: `Instagram`, url: 'https://www.instagram.com/terserah_bomat' } },
]

module.exports = {
    tags: ['others', 'information'],
    cmd: ['groupbot'],
    help: ['groupbot'],
    exec: async (m, client) => {
        await client.sendMessage(m.chat, { text: cap, footer: global.footer, templateButtons: buttonsDefault }, { quoted: m })
    }
}
