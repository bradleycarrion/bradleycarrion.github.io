/** @jsx React.DOM */
console.log("file found");

class HomePage extends React.Component {
  render() {
    return (
      <h1>Bradley Carrion</h1>
    );
  }
}

ReactDOM.render(
  <HomePage/>,
  document.getElementById('react-content')
);
