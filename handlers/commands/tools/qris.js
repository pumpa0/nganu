module.exports = {
    cmd: ['qris'],
    disabled: true,
    exec: async (m, client, { args }) => {
        try {
            await client.sendFile(m.chat, './src/hisoka.jpg', m, { image: true, mimetype: 'image/jpeg' })
        } catch (error) {
            console.log(error);
            m.reply('error')
        }
    }
}
