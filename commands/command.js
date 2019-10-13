
const {Command} = require('doctor-handler')

module.exports = new Command({
    alias : ['command','cmd'],
    call : message => {
        // code
    },
    subs : [
        {
            alias : ['add'],
            call : message => {
                // code
            }
        },
        {
            alias : ['list'],
            call : message => {
                // code
            }
        },
        {
            alias : ['remove'],
            call : message => {
                // code
            }
        }
    ]
})
