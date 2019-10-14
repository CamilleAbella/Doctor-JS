
const {Command} = require('doctor-handler')

module.exports = new Command({
    alias : ['npm'],
    call : message => {
        // command list split by permission & by category
        // send to DM
    }
})
