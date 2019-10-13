
const {Command} = require('doctor-handler')

module.exports = new Command({
    alias : ['help'],
    call : message => {
        // command list split by permission & by category
        // send to DM
    },
    subs : [
        {
            alias : ['here', 'ici'],
            call : message => {
                // command list split by permission & by category
                // send to channel
            }
        }
    ].concat(Command.array().map(command => {
        return {
            alias : command.alias,
            call : message => {
                // command detail
            }
        }
    }))
})
