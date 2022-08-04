const Image = require('../models/Image')

class ImageService {
    async getAllImages() {
        const allImages = await Image.find();
        return {
            data: allImages
        }
    }
    async createImage(body) {
        const { originalname: name, size, key, index,location: url = '' } = body
        const createImage = Image.create({
            name,
            size,
            key,
            url,
            index
        })
        return body
    }

    async deleteImage(id){
        const imagedelete = await Image.findById(id);
        await imagedelete.remove();
    }
}

module.exports = new ImageService();