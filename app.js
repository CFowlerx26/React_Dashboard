// Creating "h1" component
const Header = () => {
  return <h1>Commence Dashboard Creation!</h1>;
};

// Creating "Reviews" component
const Reviews = () => {
  return (
    <div className="reviews">
      <h2>1,281</h2>
    </div>
  );
};

// Creating "Average Rating" component
const AverageRating = () => {
  return (
    <div className="averageRating">
      <h2>1,281</h2>
    </div>
  );
};

// Create "Sentiment Analysis" component

//* Main component to nest divs in
class Dash extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div.reviews />
        <AverageRating />
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<Dash />, document.getElementById("main"));
