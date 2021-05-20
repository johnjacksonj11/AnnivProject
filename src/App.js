import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import items from './items';
import Album from './components/Albums';
import Overview from './components/Overview';
import Outro from './components/Outro'
//import {Parallax, Background } from 'react-parallax'


var rowStyle= {
  display: 'flex',
  alignItems:'center',
  backgroundColor:'red',
  height:'99vh',
  width: '100vw',
  marginBottom: 5,
  justifyContent:'Center'
}

function App() {
  var p = [];
  return (
    <div className="App">
      <Container fluid>
        <Row className="introContainer" style={rowStyle}>
          <Intro />

        </Row>
        <Row className="overviewContainer" style={rowStyle}>
          <Overview></Overview>
        </Row>
        
        {
       
        items.map((elem) =>{
          p.push(elem.lyric);
          console.log(elem.lyric);
          console.log(p);
          return <Album musicItem={elem} />
        })}
        <Outro></ Outro>

      </Container>
    </div>
      );
    }
    
    export default App;
    