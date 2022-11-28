const axios = require('axios')

module.exports = {
    processPayment: function (name, email, addr, ccnum, ccexp, price) {
        let data = {
            'vendor': 'MotorMedic',
            'trans': '907-987654321-296',
            'cc': ccnum,
            'name': name,
            'exp': ccexp,
            'amount': price
        }
        return new Promise((resolve, reject) => {
            axios.post('http://blitz.cs.niu.edu/creditcard', data)
             .then((response) => {
                resolve(response.data) 
             }).catch(err => { 
                reject(err) 
             })
        })
    }
}