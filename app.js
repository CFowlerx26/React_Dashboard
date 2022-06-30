// Creating Header
const Header = () => {
  return (
    <div className="Header">
      <h1>Commence Dashboard Creation!</h1>
    </div>
  );
};

// Creating "Reviews" component
const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <h3>1,281</h3>
    </div>
  );
};

// Creating "Average Rating" component
const AverageRating = () => {
  return (
    <div className="averageRating">
      <h2>Average Rating</h2>
      <ul className="ratingList">
        <li>1,281</li>
      </ul>
    </div>
  );
};

// Creating "Sentiment Analysis" component
const SentimentAnalysis = () => {
  return (
    <div className="sentimentAnalysis">
      <h2>Sentiment Analysis</h2>
      <ul className="analysistList">
        <li>1,281</li>
        <li>756</li>
        <li>532</li>
      </ul>
    </div>
  );
};

// Creating "Website Visitors" component
const WebsiteVisitors = () => {
  return (
    <div className="websiteVisitors">
      <h2>Website Visitors</h2>
    </div>
  );
};

// Creating "Menu Bar" component
const MenuBar = () => {
  return (
    <div className="menubar">
      <h2>Menu</h2>
      <ul className="list">
        <li>Dashboard</li>
        <br></br>
        <br></br>
        <li>Widget</li>
        <br></br>
        <br></br>
        <li>Reviews</li>
        <br></br>
        <br></br>
        <li>Customers</li>
        <br></br>
        <br></br>
        <li>Online Analysis</li>
        <br></br>
        <br></br>
        <li>Settings</li>
      </ul>
    </div>
  );
};

// Creating a component called "App"
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
        <MenuBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
//* Brackets are used when rendering the method </>
