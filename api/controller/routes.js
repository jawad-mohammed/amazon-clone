const express = require('express')
const router = express.Router()
const pool = require('../model/db')

// router.post('/api/v1/post',async(req,res)=>{
// try {
//     const newProduct = await pool.query(`insert into `)

// } catch (error) {
//     console.log(error);
// }
// })



router.get('/api/v1/books',async(req,res)=>{
    const getAllProducts = await pool.query(`select * from amazon_books`)
    res.json(getAllProducts.rows)
    })

 router.get('/api/v1/electronics',async(req,res)=>{
        const getAllProducts = await pool.query(`select * from amazon_electronics`)
        res.json(getAllProducts.rows)
        })


 router.get('/api/v1/mobiles',async(req,res)=>{
            const getAllProducts = await pool.query(`select * from amazon_mobiles`)
            res.json(getAllProducts.rows)
            })



  router.get('/api/v1/kids',async(req,res)=>{
                const getAllProducts = await pool.query(`select * from amazon_kids`)
                res.json(getAllProducts.rows)
                })
    

     router.get('/api/v1/fashion',async(req,res)=>{
                const getAllProducts = await pool.query(`select * from amazon_fashion`)
                    res.json(getAllProducts.rows)
                    })
        




module.exports = router