/* eslint-disable react/prop-types */

const NavBar = ({ setClicked }) => {
  const handleClick = (e) => {
    setClicked(e.target.id);
  };

  return (
    <div id="nav-bar">
      <button id="search-btn" className="page-btn" onClick={handleClick}>
        Search
      </button>
      <button id="trending-btn" className="page-btn" onClick={handleClick}>
        Trending
      </button>
      <button id="collection-btn" className="page-btn" onClick={handleClick}>
        Collection
      </button>
    </div>
  );
};

export default NavBar;
