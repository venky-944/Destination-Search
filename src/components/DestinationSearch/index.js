// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  changeValue = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state
    const filterList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchValue),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="inp-container">
          <input
            type="search"
            value={searchValue}
            onChange={this.changeValue}
            placeholder="search"
            className="inp"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>

        <ul className="card-container">
          {filterList.map(each => (
            <DestinationItem list={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
