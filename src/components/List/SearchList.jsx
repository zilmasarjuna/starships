import React from 'react'
import { connect } from 'react-redux'
import icSearch from 'assets/img/search-ic.svg'

import { searchListStarship } from 'store/actions/Starship/List'


const SearchList = ({ searchListStarship }) => {
  const [ search, onChangeSearch ] = React.useState();

  const onSearch = (e) => {
    e.preventDefault()
    searchListStarship({
      s: search
    })
  }

  return (
    <div className="top-search">
      <div className="container-search">
        <form onSubmit={onSearch}>
          <input 
            type="text" 
            onChange={(e) => onChangeSearch(e.target.value)}
            value={search} 
            placeholder="Search for list starships"
          />
          <button type="submit">
            <img src={icSearch} alt="ic-serch" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default connect(
  null,
  { searchListStarship }
)(SearchList)