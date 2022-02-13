import React, { Component } from 'react';
import "./ImageCtn.css"
import lata from "./lata2.jpg"

class ImageCtn extends Component {
    render() {
        return (
            <>
                <section className='container'>
                    <img src={lata} />

                </section>
                
            </>
        );
    }
}

export default ImageCtn;