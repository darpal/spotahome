import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import HomeList from "./components/_homesList.jsx";
import CitySelector from "./components/_citySelector.jsx";

class App extends React.Component {
  state = {
    ids: [],
    city: "madrid",
    homes: []
  };

  handleCityChange = newCity => {
    // take new city
    // update stat with new city
    let test = newCity.target.value;
    this.setState(function(state, props) {
      return {
        city: test
      };
    });
  };

  getHomesData() {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios
      .get(
        `https://www.spotahome.com/api/public/listings/search/markers/${
          this.state.city
        }`
      )
      .then(res => {
        const ids = res.data.data.map(obj => obj.id);
        ids.length = 30;
        this.setState({ ids });
      })
      .then(response =>
        axios
          .get(
            "https://www.spotahome.com/api/public/listings/search/homecards_ids?ids[]=" +
              this.state.ids.join("&ids[]=")
          )
          .then(res => {
            const homes = res.data.data.homecards;
            this.setState({ homes });
          })
      );
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.city !== nextProps.city) {
      this.getHomesData();
    }
  }

  componentDidMount() {
    this.getHomesData();
  }

  render() {
    return (
      <div>
        <h1>Homes List</h1>
        <CitySelector updateCity={this.handleCityChange} />
        <HomeList theHomes={this.state.homes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
