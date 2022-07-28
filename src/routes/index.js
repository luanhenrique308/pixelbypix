const routes = require('express').Router();
const multer = require('multer')
const multerConfig = require('../config/multer')
const ImageController = require('../api/controllers/ImageController');
const PixController = require('../api/controllers/PixController');

routes.post('/imageupload', multer(multerConfig).single('file'), ImageController.addImage)
routes.get('/', ImageController.listAllImages)
routes.get('/checkpayment/:id', PixController.statusPayment)
routes.post('/createcharge', PixController.createPayment)

// routes.post('/imageupload', multer(multerConfig).single('file'), (req, res)=>{
//     const {originalname: name, size, key, location: url=''} = req.file
//     const createImage =  ImageModel.create({
//         name,
//         size,
//         key,
//         url
//     })
//     console.log(req.file);
//     return res.json(req.file)
// })

module.exports = routes;
