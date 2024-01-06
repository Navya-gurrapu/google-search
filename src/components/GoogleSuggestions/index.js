// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestion extends Component {
  state = {searchInput: ' '}

  DisplayItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  searchUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="google-icon"
        />

        <div className="card-container">
          <div className="search-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-input"
            />

            <input
              type="search"
              onChange={this.searchUserInput}
              value={searchInput}
              placeholder="searchInput"
              className="input"
            />
          </div>

          <ul className="list-container">
            {searchResult.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                DisplayItem={this.DisplayItem}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestion
