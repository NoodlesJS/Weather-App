import React, {Component} from 'react'
import './Body.css'
import Search from './Search/Search'
import Result from './Result/Result'

class Body extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className='body'>
                <Search />
                <Result />
            </div>
        )
    }
}

export default Body