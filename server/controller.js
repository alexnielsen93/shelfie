module.exports ={

  getAll:(req,res)=>{
    const db = req.app.get('db');
    console.log('request recieved...')
    db.get_inventory().then((inventory)=>{
      res.status(200).send(inventory)
      
    })
    .catch((err)=>{
      console.log(`error ${err}`)
    })
  },

  addProduct:(req,res)=>{

    const db = req.app.get('db')
    console.log(req.body.img_url)
    const {img_url, product_name, product_price} = req.body
    db.add_product([img_url, product_name, product_price]).then((result)=>{
      res.status(200).send(result)
    })
    .catch((err)=>{console.log(`error ${err}`)})

  }

}
