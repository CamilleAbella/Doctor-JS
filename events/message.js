
const {Event} = require('doctor-handler')

module.exports = new Event({
    name : 'message',
    call : message => {
        /*
            Code en plus dans l'event "message" 
        */
        // (l'execution des commandes se fait du coté de DoctorHandler)
    }
})