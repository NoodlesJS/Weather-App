import React from 'react'
import './Footer.css'
import twitter from './img/twitter.png'
import github from './img/github.png'

export default function Footer() {
    return (
        <div className='footer'>
            <p>Created by Noodles</p>
            <div>
                <a href="https://dev.to/noodlesjs" target='_blank' >
                <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Romaen's DEV Profile" className='badge'/>
                </a>

                <a href="https://github.com/NoodlesJS" target='_blank'>
                <img src={github} alt="Romaen's Github Profile" className='badge'/>
                </a>

                <a href="https://twitter.com/CodingNoodles" target='_blank'>
                <img src={twitter} alt="Romaen's Twitter Profile" className='badge'/>
                </a>
            </div>
        </div>
    )
}