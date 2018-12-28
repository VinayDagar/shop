const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{    // use fire for all the http methods.
    res.render('admin/add-product',
    {
        pageTitle:'Add Product',
        path:'/add-product',
        isAuthenticated: req.session.isLoggedIn
    })
}

exports.postAddProduct = (req,res,next)=>{   //post only fire for post method.
    const product = new Product(req.body.title);
    product.save()
        .then(res.redirect('/'))
        .catch(err => console.log(err))
}

exports.getProduct = (req,res,next)=>{
    Product.fetchAll()
        .then( res.render('shop',
        {
            prods:products, 
            pageTitle:'Shop',
            hasProds:products.length > 0,        
            path:'/' ,
            isAuthenticated: req.session.isLoggedIn
        }))
        .catch(err => console.log(err));
 }