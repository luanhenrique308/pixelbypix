const multer = require('multer')
const multerConfig = require('../../config/multer')
const ImageModel = require('../models/Image');
const ImageService = require('../services/ImageService');
const HTTP = require('../../constants/http')
class ImageController {
    async listAllImages(req, res, next){
        try{
            const response = await ImageService.getAllImages()
            return res.status(HTTP.OK).json(response.data)
        } catch(e) {
            return next(e)
        }
    }
    async addImage(req, res, next) {
        try {
            const response = await ImageService.createImage(req.file)
            return res.status(HTTP.CREATED).json(response)
        } catch (e) {
            return next(e)
        }
    }
}

module.exports = new ImageController();
