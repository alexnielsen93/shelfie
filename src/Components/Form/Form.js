import React, {Component} from 'react'

export default class Form extends Component{
  constructor(){
    super()
    this.state = {
      imgUrl: 'img',
      productName : 'name',
      productPrice : 0,

    }

  }

  handleChange= (event)=>{
    let {value, name} = event.target
    console.log('name',[name], 'value',value)
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  clearInput =()=>{
    this.setState({
      imgUrl: '',
      productName: '',
      productPrice: 0,
    })
    document.getElementById("userInput").reset()


  }

  addInput = ()=>{
    //add input to database
    this.setState({
      imgUrl: '',
      productName: '',
      productPrice: 0,
    })
    document.getElementById("userInput").reset()
  }

  render(){

    return <div>
      <img src = {this.state.imgUrl} onError = {()=>this.src='http://chittagongit.com//images/image-error-icon/image-error-icon-5.jpg'} alt ='' width = "200" height = "200"
      /> 
      <form id = "userInput">
      <input name ="imgUrl" type = "text"  className = "img-url" placeholder = "image url" onChange = {this.handleChange}></input>
      <input name = "productName" onChange = {this.handleChange}  className = "product-name" placeholder = "product name"></input>
      <input name = "productPrice"onChange = {this.handleChange} className = "product-price" placeholder = "price"></input>
      <button onClick = {this.clearInput}>Cancel</button>
      <button>Add</button>
      </form>
    </div>

  }
}