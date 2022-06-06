import React from "react";

function Search({searchText, setSearchText}) {

  function handleChange(e){
    setSearchText(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={searchText} onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
