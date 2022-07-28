const mercadopago = require('mercadopago');
const payment_data = require('../../config/pix-mercadopago');
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);
const axios = require('axios');

class PixService {
    async createCharge() {
        const response = await mercadopago.payment.create(payment_data)
            .then(function (data) {
                console.log(data.response)
                return data.response
            }).catch(function (error) {
                console.log(error)
            });

        return response
    }
    async checkPayment(id) {
        const idPix = id
        const response = await axios({
            method: 'get',
            url: `https://api.mercadopago.com/v1/payments/${idPix}`,
            headers: {
                'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`,
            }
        }).then(function(data){
            return data.data
        })

        return response
    }
}

module.exports = new PixService();