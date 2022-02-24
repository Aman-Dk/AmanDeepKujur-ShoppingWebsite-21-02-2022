import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styles.css'
import List from './List'

export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isAdded: "Add",
      null: "#",
      clicked:false,
      
      title:'',
      image:'',
      description:'',
      key:'',
      price:''
      
    };
  }

  async componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ products: json }));
  }

  isAdded = (e) => {
    this.setState({ isAdded: e });
  };

  show = (image,title,description,price) => {

    this.setState({clicked:true,image:image,title:title,description:description,price:price})
    // alert(image + title + description)

  }

  hide = () =>{
    this.setState({clicked:false})
  }

  render() {

    const ProductList = this.state.products.map((product) => {
                          return (
                                  <List
                                    key={product.id}
                                    title={product.title}
                                    image={product.image}
                                    description={product.description}
                                    price={product.price}
                                    addText={this.state.isAdded}
                                    isAdded={this.isAdded}
                                    send = {this.show}                                    
                                  />
                                );
                          });

  return (
    <div className="list-group">
      { 
        !this.state.clicked ?

        <ListGroup as="ol" className="list keep-scrolling">
          {ProductList}
        </ListGroup>

        : 

        <ListGroup as="ol" className="list keep-scrolling">
          <Link to='/' onClick={this.hide}> Go Back </Link>
          <List 
            title={this.state.title}
            image={this.state.image}
            description={this.state.description}
            price={this.state.price}
            addText={this.state.isAdded}
            isAdded={this.isAdded}
            // send = {this.show}         
          />
        </ListGroup>

      }

    </div>
  )
  }
}
