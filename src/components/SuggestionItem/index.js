// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachItem, DisplayItem} = props
  const {suggestion} = eachItem

  const onclickSuggestion = () => {
    DisplayItem(suggestion)
  }

  return (
    <li className="user-container">
      <p className="user-name">{suggestion}</p>

      <button className="item-btn" onClick={onclickSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img-url"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
