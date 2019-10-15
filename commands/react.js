
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : ['réaction','reaction','react'],
    call : ( message, cropedContent ) => {
        message.delete()
        const emojis = []
        // Parser URL puis le retirer
        // Parser emojis
        // Le reste tu connais
    },
    subs : [
        {
            aliases : ['num','-n','nums'],
            call : ( message, cropedContent ) => {
                message.delete()
                // Séparer arguments
                // Parser Integer puis le retirer
                // Parser URL
                // Ajouter autant de reaction :num: que l'Integer sur le message de l'URL
            }
        }
    ]
})