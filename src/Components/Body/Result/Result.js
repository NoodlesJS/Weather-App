import React from 'react'
import './Result.css'

export default function Result(props) {
    return (
        <div className='result'>
            <div className='result-card' style={{background: props.background}}>
                <div className='result-card-header'>
                    <div className='result-card-header-1'>
                        <p className='title'>{props.weather}</p>
                        <p className='temp'>{props.temp}</p>
                        <p className='city'>{props.city}</p>
                    </div>
                    <div className='result-card-header-2'>
                        <img src={props.icon} width='30'/>
                    </div>
                </div>
                <div className='result-card-body'>
                    <p>{props.error}</p>
                    <img src={props.image} />
                </div>
            </div>
        </div>
    )
}