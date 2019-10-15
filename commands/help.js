
const {Command} = require('doctor-handler')

module.exports = new Command({
    aliases : ['help','menu','index'],
    call : message => {
        // command list split by permission & by category
        // send to DM
    },
    subs : [
        {
            aliases : ['here', 'ici','-h'],
            call : message => {
                // command list split by permission & by category
                // send to channel
            }
        }
    ].concat(Command.array().map(command => {
        return {
            aliases : command.aliases,
            call : message => {
                // command detail
            }
        }
    }))
})
