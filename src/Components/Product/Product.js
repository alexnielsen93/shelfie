import React, {Component} from 'react'

export default class Product extends Component{
  
componentDidMount(){
  console.log(this.state.id)
}


  render(){
  let {product} = this.props
  console.log(product)
  return( 
    <div>

      <div>
        <img src={product.img_url} alt="" height = '200' width = '200'/>
      </div>
      <div>
        <h1>{product.product_name}</h1>
      </div>
      <div>
        <h2>{product.product_price}</h2>
      </div>
      <div>
        <button>Edit</button>
      </div>
      <div>
        <button >Delete</button>
      </div>
    </div>
    )
  }
}