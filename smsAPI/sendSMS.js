const AfricasTalking = require('africastalking')

const africastalking = AfricasTalking({
    apiKey : '30133ae1aafb6c4edeab6a371a0aa1efd6e36adee33e3fa3f3acf33a07bb21cc',
    username : 'sandbox'
})

module.exports = async function sendSMS(){
    try {
        const result =await africastalking.SMS.send({
            to : '+254705788522',
            message : 'hey ther at net ninja how are you',
            from : '77774'
        })
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}