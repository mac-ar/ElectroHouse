const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/img/users')
    },

    filename: function (req, file, cb) {
        let name_img = `img-${Date.now()}-${file.originalname}`;
        cb(null, name_img)
    }
})

const fileFilter = function (req, file, cb) {
    // Verifica si el archivo es una imagen
    console.log('tipo de archivo ', file.mimetype);
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('El archivo no es una imagen, vuelve atras e intenta de nuevo'), false);
    }
};

const uploadFile = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = uploadFile