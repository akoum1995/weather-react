import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      test: "",
      result: {},
      clicked: false
    }
  }
  changeValue = (event) => {
    const city = event.target.value;
    this.setState({ city });
  }
  seeWeather = () => {
    axios.get('http://api.apixu.com/v1/current.json?key=84f0c2ede84d43b8aef144603190303&q=' + this.state.city)
    .then(res =>
      this.setState({ result: res.data })
    );
  }
  render() {
    return (
      <Container>
        <Row>
            <Col md="9">
              <input type="text" className="form-control" name="city" onChange={this.changeValue} />
            </Col>
            <Col md="3">
              <button className="btn btn-lg btn-primary" onClick={this.seeWeather}>Show</button>
            </Col>
        </Row>
        <div style={{marginBottom:'10%'}}></div>
        <Row  style={{height:'70px'}}>
        {this.state.clicked === true &&<Col md="3">
           <h4>Local time : </h4>
            <p>{this.state.result.location.localtime}</p>
          </Col>}
          
          {this.state.clicked === true &&  <Col md="3">
          <img src = "https://image.flaticon.com/icons/png/512/59/59302.png" style={{width:'30px', height:'30px'}} alt=""/>
             <h2>{this.state.result.current.temp_c}</h2>
          </Col>}
          {this.state.clicked === true &&<Col md="3">
           <img src = "https://image.flaticon.com/icons/png/512/16/16089.png" style={{width:'30px', height:'30px'}} alt=""/>
              <h2>{this.state.result.current.temp_f}</h2>
          </Col>}
          {this.state.clicked === true &&<Col md="3">
           <img src = {this.state.result.current.condition.icon} style={{width:'100px', height:'100px'}} alt=""/>
             <h6>{this.state.result.current.condition.text}</h6>
          </Col>}
        </Row> 
        <div style={{marginBottom:'10%'}}></div>
        <Row style={{height:'70px'}}>        
        {this.state.clicked === true &&<Col md="3">
         <img src = "https://image.flaticon.com/icons/png/512/56/56086.png" style={{width:'100px', height:'100px'}} alt=""/>
         <h2>MPH : {this.state.result.current.wind_mph}</h2>
         <h2>KPH : {this.state.result.current.wind_kph}</h2>
        </Col>}
        {this.state.clicked === true &&<Col md="3">
         <img src = "https://cdn.shopify.com/s/files/1/1176/9992/products/shutterstock_407149498_c10f9f95-ca25-4e76-bb10-22c6a6f61398_2048x2048.jpg?v=1515027532" style={{width:'100px', height:'100px'}} alt=""/>
         <h2>{this.state.result.current.wind_degree} degree</h2>
        </Col>}
        {this.state.clicked === true &&<Col md="3">
         <img src = "https://image.flaticon.com/icons/png/512/120/120806.png" style={{width:'100px', height:'100px'}} alt=""/>
         <h2>{this.state.result.current.humidity}%</h2>
        </Col>}
        {this.state.clicked === true &&<Col md="3">
         <img src = "https://image.flaticon.com/icons/svg/53/53934.svg" style={{width:'100px', height:'100px'}} alt=""/>
         <h2>{this.state.result.current.cloud}%</h2>
        </Col>}
        {this.state.clicked === true &&<Col md="6">
         
         <h5>Feels like in celsius :{this.state.result.current.feelslike_c}
         <img src = "https://image.flaticon.com/icons/png/512/121/121768.png" style={{width:'12px', height:'12px'}} alt=""/></h5>
         <h5>Feels like in fahrenheit :{this.state.result.current.feelslike_f}
         <img src = "https://image.flaticon.com/icons/png/512/56/56171.png" style={{width:'24px', height:'24px'}} alt=""/></h5>

        </Col>}
      </Row>
      </Container>
    );
  }
}

export default App;
