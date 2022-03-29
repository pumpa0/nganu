module.exports = {
    tags: ['others', 'information'],
    cmd: ['donasi', 'donate'],
    help: ['donasi'],
    exec: (m, client) => {
        let caption = `Hai *${client.pushname}* 👋
Berapapun Donasi Kamu, Akan Sangat Berguna Bagi Perkembangan Bot Ini

Thanks!

`
        const btn = [
            { urlButton: { displayText: `Saweria`, url: `https://saweria.co/hanbotz` } },
        ]
        client.sendMessage(m.chat, { text: caption, footer: `© HanBotz`, templateButtons: btn }, { quoted: m })
    }
}
