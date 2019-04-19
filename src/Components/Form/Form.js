import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state =
      {
        
        
          img_url: '',
          product_name: '',
          product_price: 0,
        
      }

  }

  handleChange = (event) => {
    let { value, name } = event.target
    console.log('name', [name], 'value', value)
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  clearInput = () => {
    console.log('clearing boxes')
    this.setState({
      img_url: '',
      product_name: '',
      product_price: 0,
    })
    


  }

  addInput = () => {
    console.log('adding product',this.state)
    let product = this.state
    this.props.addProduct(product)
    this.setState({
      img_url: '',
      product_name: '',
      product_price: 0,
    })
     
  }

  render() {

    return <div>
      <img src={this.state.img_url} onError={() => this.src = 'http://chittagongit.com//images/image-error-icon/image-error-icon-5.jpg'} alt='' width="200" height="200"
      />
      <div id="userInput">
        <input
          name="img_url"
          type="text"
          className="img-url"
          placeholder="image url"
          value ={this.state.img_url}
          onChange={this.handleChange}>
        </input>

        <input name="product_name"
          onChange={this.handleChange}
          className="product-name"
          value ={this.state.product_name}
          placeholder="product name">
        </input>

        <input
          name="product_price"
          onChange={this.handleChange}
          className="product-price"
          value = {this.state.product_price}
          placeholder="price">
        </input>

        <button onClick={this.clearInput}>Cancel</button>
        <button onClick={this.addInput}>Add</button>
      </div>
    </div>

  }
}