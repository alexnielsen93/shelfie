import React, {Component} from 'react'
import Product from '../Product/Product'
export default class Dashboard extends Component{
  constructor(){
    super()
    

  }

  render(){

    return <div>
      Dashboard
      {this.props.inventoryList.map((product)=>{
            return <Product/>
      })}
   




    </div>


  }
}