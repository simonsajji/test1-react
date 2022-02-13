import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <>
                <section className='footer'>
                    <div className='quote'>I feel God has sent me to Earth to sing. I started singing when I was five, but I don't think I've worked as hard as many other people. <span>- Lata Mangeshkar</span></div>
                    <div className='more'>Read more about this "Incredible Human Being" at <a href='https://en.wikipedia.org/wiki/Lata_Mangeshkar' target="_blank">@wikipedia</a></div>
                </section>
                
            </>
        );
    }
}

export default Footer;