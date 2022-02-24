import { Component } from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Link,Redirect } from "react-router-dom";
import { add } from "../actions";

import "../Styles.css";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addText: props.addText,
      isAdded: ""
    };
  }

  clickHandler = () => {
    // alert('clicked')
    // this.props.isAdded('Added')
    this.setState({ addText: "Added", isAdded: "added" });
  };

  show =() =>{
    this.props.send(this.props.image,this.props.title,this.props.description,this.props.price)
  }

  render() {
    return (
      <ul className="p-0">
        <ListGroup.Item onClick={this.show}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <img
            style={{ marginRight: "0.5rem" }}
            src={this.props.image}
            alt={this.props.title}
            width="100"
            height="100"
            className="rounded-circle flex-shrink-0"
          />
          <div className="ms-2 me-auto">
            <div className="fw-bold">{this.props.title}</div>
            <div>
              <div
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem"
                }}
              >
                ₹{this.props.price}
              </div>
            </div>
            <div style={{ width: "100%" }}>{this.props.description}</div>
          </div>
          {/* <div className="btn"> */}
          <Button onClick={this.clickHandler} className={this.state.isAdded}>
            {this.state.addText}
          </Button>
          {/* </div> */}
          <Badge variant="primary" pill></Badge>
        </ListGroup.Item>
      </ul>
    );
  }
}
