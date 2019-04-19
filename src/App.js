import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inventoryList: []
    }
  }

  componentDidMount(){
    console.log('sending request to server...')
    axios.get('/api/inventory').then((res)=>{
      
      this.setState({inventoryList:res.data})
      console.log(this.state)
    })
    .catch((err)=>{
      console.log(`error ${err}`)
    })
  }
  addProduct=(product)=>{
    axios.post('/api/product', product).then((res)=>{
      this.setState({
        inventoryList : res.data
      })
    })
    .catch((err)=>{
      console.log(`error ${err}`)
    })
  }
  render() {
    return (
      <div>
        <Dashboard inventoryList = {this.state.inventoryList}/>
        <Form addProduct = {this.addProduct}/>
        <Header />

      </div>
    );
  }
}

export default App;
