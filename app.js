class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryListItems = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);


var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItems items={['soap', 'tangelos', 'coconut oil']}/>
  </div>
);


ReactDOM.render(<GroceryList />, document.getElementById("app"));