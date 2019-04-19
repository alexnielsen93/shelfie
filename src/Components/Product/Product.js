import React, {Component} from 'react'

export default class Product extends Component{
  
componentDidMount(){
  
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
      <div></div>
      <div></div>
    </div>
    )
  }
}