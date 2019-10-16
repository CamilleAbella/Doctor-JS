
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : ['notifyme','notify','notif','alert'],
    call : ( message, cropedContent ) => {
        // Si no arg : explique la commande
        // Si mention offline : notify quand mention se connecte
        // si mention online : notify quand mention parle
        // sinon : notify si regex.test(new messages) (doubler les \ de la regex)
        // a chaque notification, ajouter une reaction pour stoper le process
    },
    subs : [
        {
            aliases : ['once','one','1','-u'],
            call : ( message, cropedContent ) => {
                // Pareil que le notifyme basique
                // sauf que ça ne notifie qu'une seule fois
            }
        }
    ]
})