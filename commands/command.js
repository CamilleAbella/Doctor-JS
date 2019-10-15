
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : ['command','cmd'],
    call : message => {
        // code
    },
    subs : [
        {
            aliases : ['add','-a'],
            call : message => {
                // code
            }
        },
        {
            aliases : ['list','-l'],
            call : message => {
                // code
            }
        },
        {
            aliases : ['remove','-r'],
            call : message => {
                // code
            }
        }
    ]
})
