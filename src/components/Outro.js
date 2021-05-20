import React from 'react';
import Container from 'react-bootstrap/Container'
import Typical from 'react-typical';
import videoSource from '../vids/hike.mp4';
import classes from '../assets/backgroundVideo.css';
import {Row} from 'react-bootstrap';
import introPic from '../images/IMG_1620.JPG'


var intro = [

    "Lorem ipsum dolor sit amet,",1000,
    "Mauris vehicula libero id dui vestibulum volutpat.",1000,
    "Ut mattis commodo risus, id co",1000,
    "Integer vulputate a odio id pretium",1000,
    "Sed ut nulla ut tortor congue gravida.",1000,
    "Suspendisse est lacus, tempus cursus convallis nec,",1000,
    "Patchwork Poetry",1000,
];
var comments = [
    `I love your with you comments when talking about an event its always I cant wait do do this with you, not just I cant wait for this trip. Its I cant wait for this trip with you.\n
    Its a small thing that makes it extra special, and I want you to know I wake up each day excited to spend life with you`,
    'Thank you for every piece of you. Thank you for accepting every part of me. The pieces the rest of the world werent meant to see',


]


var overview = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at arcu et enim aliquam porttitor id id mi. Mauris vehicula libero id dui vestibulum volutpat. Integer porttitor dolor et dolor hendrerit, ut hendrerit leo bibendum. Duis sit amet nulla nisi. Vestibulum id quam velit. Aenean mattis elit auctor, laoreet diam ut, aliquet dui. Aenean eu ipsum molestie, vulputate lacus vitae, commodo elit.`

]
var outroHTML  = `REDACTED HTML`


export default function Outro() {
    var outroHTML  = `REDACTED HTML`



    function createOutro(){
        return {__html: outroHTML}
    }

    return (
        <Container style={{color:'white'}}>
            <div className="myText" style={{backgroundColor:'black',marginTop:20,paddingBottom:20}}>
                <h3 dangerouslySetInnerHTML={createOutro()}></h3>
            </div>
        </Container>
    )
}
