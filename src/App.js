import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
class App extends Component {
  constructor() {
    super()
    this.state = {
      inventoryList: [
        {
          imgUrl: 'https://assets.academy.com/mgen/69/20017969.jpg?wid=250&hei=250',
          productName: 'Shoes',
          productPrice: 100,
        },
        {
          imgUrl: 'https://www.vuoriclothing.com/prodvuori/media/products/2019/01/22/V418NVY_0-thumbnail.jpg',
          productName: 'Pants',
          productPrice: 1000,
        },
        {
          imgUrl: 'https://fd2d36601310a4b864cd-53b164693007bb30596f09ebca9850f8.ssl.cf1.rackcdn.com/img-XfTK7OAy-medium.jpg',
          productName: 'Shirt',
          productPrice: 10000,
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Dashboard inventoryList = {this.state.inventoryList}/>
        <Form />
        <Header />

      </div>
    );
  }
}

export default App;
