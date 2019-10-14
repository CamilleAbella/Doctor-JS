
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : 'help',
    call : message => {
        // command list split by permission & by category
        // send to DM
    },
    subs : [
        {
            aliases : ['here', 'ici'],
            call : message => {
                // command list split by permission & by category
                // send to channel
            }
        }
    ].concat(Command.array().map(command => {
        return {
            aliases : command.alias,
            call : message => {
                // command detail
            }
        }
    }))
})
