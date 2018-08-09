var Nav = ({handleSearchInputChange}) => {
 <div className="navbar">
  <div className="col-md-6 col-md-offset-3">
    <Search
      handleSearchInputChange={handleSearchInputChange}
     />
  </div>
 </div>
};

window.Nav = Nav;
