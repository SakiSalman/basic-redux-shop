import express from 'express';
import multer from 'multer';
import { createProduct, deleteProduct, getAllProduct, getSingelProduct, updateProduct } from '../controllers/productController.js';
import path, {resolve} from 'path'


// init router 
const router = express.Router();

const __dirname = resolve()

// File Upload with multer sstoreage setup
const storage = multer.diskStorage( {
    filename : (req, file, cb) => {
        cb(null, Date.now() +'_'+ file.originalname)
    },
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, 'api/public/images/products/'))
    }
})

const productMulter = multer({
    storage : storage
}).single('photo')


// Prduct Router API
router.route('/').get(getAllProduct).post(productMulter, createProduct)
router.route('/:id').get(getSingelProduct).put(updateProduct).patch(updateProduct).delete(deleteProduct)


// export default router 
export default router;