const mercadopago = require('mercadopago');
const payment_data = require('../../config/pix-mercadopago');
const HTTP = require('../../constants/http');
const PixService = require('../services/PixService');
mercadopago.configurations.setAccessToken('');

class PixController {
    async createPayment(req, res, next) {
        try{
            const response = await PixService.createCharge();
            console.log(response)
            return res.json(response)
        }catch(e){
            return next(e)
        }
    }
    async statusPayment(req, res, next){

        try{
            const {id} = req.params

            const response = await PixService.checkPayment(id);
            return res.status(HTTP.OK).json({
                status: response
            })
        }catch(e){
            return next(e)
        }
    }
}


module.exports = new PixController();