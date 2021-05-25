import React from 'react';
import {Row, Col } from 'react-bootstrap';
//import {Parallax, Background } from 'react-parallax'
import ss from '../seeingSounds.png';
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  




export default function Albums(props) {
    const [flipped, setFlipped] = useState(false)
    function handleClick(e) {
        e.preventDefault();
        console.log("clicked");
        if(flipped){
            setFlipped(false);
        }
        else
            setFlipped(true);
    }
    var x = props.musicItem.lyric.replace(/,/g,'<br/>');
    console.log(x);
    function createLyric(){
        return {__html: x}
    }
    return (
           
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" style={{BackgroundImage:ss}}>
                <Row style={{alignItems: 'center'}} >
                    <Col style={{backgroundColor:'white',borderRadius: '25px'}}><h5 dangerouslySetInnerHTML={createLyric()} />
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <img style={{height:'40vh',width:'40vw',borderRadius: '25px'}} src={props.musicItem.albumReq} onClick={handleClick}/>
                            </Col>
                        </Row>
                    </Col>

                    <Col style={{backgroundColor:'white',borderRadius: '25px'}} className="myText"><h4>{props.musicItem.details}</h4></Col>
                </Row>
                <Row style={{alignItems: 'center'}} onClick={handleClick}>
                    <Col ><h4>
                        {props.musicItem.lyric}
                        </h4>
                        </Col>

                    <Col >
                        <Row>
                            <Col style={{height:'40vh',width:'40vw',borderRadius: '25px'}}>
                                
                            </Col>
                        </Row>
                    </Col>

                    <Col className="myText">{props.musicItem.details}</Col>
                </Row>
            </ReactCardFlip>
       
    )
}
