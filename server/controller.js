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

}
