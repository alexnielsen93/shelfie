import React, {Component} from 'react'

export default class Form extends Component{


  render(){

    return <div>
      <input className = "img-url" placeholder = "image url"></input>
      <input className = "product-name" placeholder = "product name"></input>
      <input className = "product-price" placeholder = "price"></input>
      <button>Cancel</button>
      <button>Add</button>
    </div>

  }
}