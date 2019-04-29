/**
 * CityStateZip.js
 *
 * Inputs for the zip to enter and the city and state results
 * if applicable
 */
import React from "react";
import PropTypes from "prop-types";
import NotFound from "./NotFound";
import ZipInput from "./ZipInput";
import TextInput from "./TextInput";

/**
 * @param {Object} data | Input values and functions to call
 */
const CityStateZip = ({ data }) => {
  return (
    <div>
      {data.notFound && <NotFound open={true} />}
      <ZipInput
        zip={data.zip}
        handleChange={data.handleChange}
        handleSearch={data.handleSearch}
      />
      <TextInput id="city" label="City" value={data.city} />
      <TextInput id="state" label="State" value={data.state} />
    </div>
  );
};

CityStateZip.propTypes = {
  // data returned from the api call
  data: PropTypes.object
};

export default CityStateZip;
