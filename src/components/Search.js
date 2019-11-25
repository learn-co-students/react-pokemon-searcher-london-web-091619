import React from "react";

const Search = ({ onChange, searchValue }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValue} onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
