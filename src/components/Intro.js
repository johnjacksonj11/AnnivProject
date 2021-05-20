import React from 'react';
import Container from 'react-bootstrap/Container'
import Typical from 'react-typical';
import videoSource from '../vids/hike.mp4';
import classes from '../assets/backgroundVideo.css';
import {Row} from 'react-bootstrap';
import introPic from '../images/IMG_1620.JPG'


var intro = [

    "When we met I couldn't comprehend the depths our love could reach",1000,
    "I could never quantify all that you are to me.",1000,
    "Music that reminds me of your melodies,",1000,
    "the footnotes to a souls symphony,",1000,
    "the lyrics here they speak to me",1000,
    "a tribute to you,",1000,
    "Patchwork Poetry",1000,
];
var comments = [
    `I love your with you comments when talking about an event its always I cant wait do do this with you, not just I cant wait for this trip. Its I cant wait for this trip with you.\n
    Its a small thing that makes it extra special, and I want you to know I wake up each day excited to spend life with you`,
    'Thank you for every piece of you. Thank you for accepting every part of me. The pieces the rest of the world werent meant to see',


]


var overview = [
    `I wanted to put something together to try and show you how much I appreciate you being in my life,
    I wish that I was a good enough artist or poet so I could write you a song or poem to really express the extent of my love for you
     I wanted something truly unique on the level of how extraordinary you are, and knew I wasnt clever enough to do it alone.
     So I took the songs we've listened to, some of them over the past month some of them the past couple years and some of them from when we first started dating,
     I took out my favorite quotes or lines, any of the things that made me think of you and added them to this playlist. A poem patched together,
     with some of the songs we have filled our lives with. Audio is so important to me you know how much I love music, but I dont think, you quite understand
     how much your audio means to me, your laugh, your giggle, the way you say my name, all the stories with all their
     excitement and each persons voice. The way you express your emotions so brazenly in your tone is such a beauty to behold. You speak in the way a fire
     burns across a prairie, its a dance, back and forth, tossing ashes into the sky as you cover every inch of your story.
    `

]


export default function Intro() {
    return (
        <Container style={{color:'white'}}>

                <Typical 
                    steps={intro}
                    loop={1}
                    wrapper="h3"
                />
      
            {/* {intro.map((elem) => {
                return <h3>{elem}</h3>
            })} */}
        </Container>
    )
}
