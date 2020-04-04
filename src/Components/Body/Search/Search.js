import React, {Component} from 'react'
import './Search.css'
import search from './img/search.svg'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetField = this.resetField.bind(this);
    }

    handleSubmit(event) {
        this.props.getCityName(this.state.city);
        event.preventDefault()
        this.resetField();
    }
    handleChange(event) {
        this.setState({city: event.target.value});
    }
    resetField() {
        this.setState({city: ''});
    }

    render() {
        return (
           <div className='search'>
               <form className='searchForm' onSubmit={this.handleSubmit}>
                   <input className='formInput' type='text' placeholder='Input city name' value={this.state.city} onChange={this.handleChange} ></input>
                   <button className='formButton'><img src={search} alt='A search button' height='20'/></button>
               </form>
           </div>
        )
    }
}
export default Search