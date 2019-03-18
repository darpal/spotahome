import React from "react";

class CitySelector extends React.Component {
  handleChange = event => {
    this.props.updateCity(event);
  };
  render() {
    return (
      <div>
        <h2>Select City:</h2>
        <select name="city" id="city" onChange={this.handleChange}>
          <option value="madrid" selected>
            Madrid
          </option>
          <option value="london">London</option>
        </select>
      </div>
    );
  }
}

export default CitySelector;
