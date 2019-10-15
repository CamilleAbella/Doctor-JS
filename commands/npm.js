
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : 'npm',
    call : ( message, keyword ) => {
        // Recherche des informations sur le package
    },
    subs : [
        {
            aliases : ['install','i'],
            call : ( message, packageName ) => {
                // Installation du package sur Doctor JS. (ghom only)
                // Faire un require du package.
                // Ajout des liens vers le package.
            }
        },{
            aliases : ['remove','r'],
            call : ( message, packageName ) => {
                // Désinstallation du package sur Doctor JS. (ghom only)
                // suppression des liens et du require.
            }
        }
    ]
})
