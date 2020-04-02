import React, {Component} from 'react'
import './Search.css'
import search from './img/search.svg'

class Search extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
           <div className='search'>
               <form className='searchForm'>
                   <input className='formInput' type='text' placeholder='Input city name'></input>
                   <button className='formButton'><img src={search} alt='A search button' height='20'/></button>
               </form>
           </div>
        )
    }
}
export default Search