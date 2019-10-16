
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : ['roleme','rm'],
    call : ( message, cropedContent ) => {
        // vérifier si l'un des roles en DB correspond aux arguments
    },
    subs : [
        {
            aliases : ['list','-l','ls'],
            call : ( message ) => {
                // list roles
            }
        },
        {
            aliases : 'helper',
            call : ( message ) => {
                // Si pas en DM, invite a faire la commande en DM
                // Si en DM, commence les tests de qualification
            }
        },
        {
            aliases : ['add','-a','push','-p'],
            call : ( message, cropedContent ) => {
                // add a role to roleme list
            }
        },
        {
            aliases : ['remove','-r','delete','-d'],
            call : ( message, cropedContent ) => {
                // remove a role from roleme list
            }
        }
    ]
})