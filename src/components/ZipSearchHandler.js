/**
 * Reusable state and api handler for rendered props
 */
import { Component } from "react";
import ZipApi from "../ZipApi";

// state props need to be added here
const defaultState = { zip: "", city: "", state: "", notFound: false };

class ZipSearchHandler extends Component {
  state = defaultState;

  /**
   * Updates the state when the zip input gets changes
   *
   * @param {Object} e | Input event
   */
  handleChange = e => {
    let val = e.target.value;
    // cleared the input so reset
    if (val.length == 0) return this.setState(defaultState);

    // only allowing 5 characters to update the zip
    if (val.length <= 5) return this.setState({ notFound: false, zip: val });
  };

  /**
   * Called from rendered props to call the api
   */
  handleSearch = async () => {
    let res = await ZipApi.search(this.state.zip);
    if (res && Array.isArray(res.places)) {
      let place = res.places[0];
      this.setState({
        notFound: false,
        city: place["place name"],
        state: place["state"],
        lat: place.latitude,
        lon: place.longitude
      });
    } else {
      defaultState.notFound = true;
      this.setState(defaultState);
    }
  };

  render() {
    // assign the data and functions to a single object
    let data = {
      handleChange: this.handleChange,
      handleSearch: this.handleSearch
    };
    return this.props.render(Object.assign(data, this.state));
  }
}

export default ZipSearchHandler;
