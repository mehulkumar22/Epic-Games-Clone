import './BrowseMore.css';

const BrowseLink = () => {
  return (
    <div className="container">
      <div className="image_div">
        <img
          src="https://cdn2.unrealengine.com/egs-browsebreaker-no-cn-1280x960-1280x960-d86fc25f7c83.png"
          alt="browse"
        />
      </div>

      <div className="content_div">
        <p className="heading">Browse</p>
        <p className="subheading">
          Explore our catalog for your next favorite game!
        </p>
        <a href="#">
          <button className="btn">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default BrowseLink;
