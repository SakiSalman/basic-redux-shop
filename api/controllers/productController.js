import Products from '../models/Product.js'
import createError from './errorController.js';


/**
 * @access public 
 * @route /api/v1/product
 * @method GET 
 */
export const getAllProduct = async (req, res, next) => {
    
    try {

        const products = await Products.find();
        res.status(200).json(products);

    } catch (error) {

        next(error);
        
    }
    
}
/**
 * @access public 
 * @route /api/v1/product
 * @method POST 
 */
export const createProduct = async (req, res, next) => {

    console.log(req.body);
    
    try {


        const products = await Products.create({
            ...req.body,
            photo : req.body
        });

        if (products) {
            res.status(200).json({
                message : 'Product is created!'
            });
        }else{
            res.status(200).json({
                message : 'Product is not created! (error)'
            });
        }
  

    } catch (error) {

        next(createError(401, 'Product Created Falis!'));
        
    }
    
}

/**
 * @access public 
 * @route /api/v1/product/:id
 * @method POST 
 */
export const getSingelProduct = async (req, res, next) => {
    const {id} = req.params
    try {



        const product = await Products.findOne({_id : id})
        if (product) {
            res.status(200).json(product);
        }else{
            res.status(200).json({
                message : 'No Product Found! (error)'
            });
        }
  

    } catch (error) {

        next(createError(401, 'Product Not Found!'));
        
    }
    
}

/**
 * @access public 
 * @route /api/v1/product/:id
 * @method PUT/PATCH 
 */
export const updateProduct = async (req, res, next) => {
    const {id} = req.params
    try {

        const product = await Products.findByIdAndUpdate(id, req.body)
        if (product) {
            res.status(200).json(product);
        }else{
            res.status(200).json({
                message : 'No Product Found! (error)'
            });
        }
  

    } catch (error) {

        next(createError(401, 'Update Product Falis!'));
        
    }
    
}


/**
 * @access public 
 * @route /api/v1/product/:id
 * @method Delete
 */
export const deleteProduct = async (req, res, next) => {
    const {id} = req.params
    try {

        const product = await Products.findByIdAndDelete(id)
        if (product) {
            res.status(200).json(product);
        }else{
            res.status(200).json({
                message : 'No Product Found! (error)'
            });
        }
  

    } catch (error) {

        next(createError(401, 'Delete Product Falis!'));
        
    }
    
}

