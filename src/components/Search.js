import React from "react"

const Search = ({ query, onChange }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={query} className="prompt" onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
