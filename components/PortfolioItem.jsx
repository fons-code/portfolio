import Portfolio from "../pages/portfolio";

const PortfolioItem = () => {
  return (
    <div className="portfolio-item">
      <img src="./banner.jpg" />
      <div className="portfolio-item__content">
        <h2>this is a title</h2>
        <p>this is a description</p>
      </div>
      
    </div>
  );
};
export default PortfolioItem;
