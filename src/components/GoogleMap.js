/**
 * Google Map iFrame component using lat and long to create a url
 * to display a map
 */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  iframe: {
    width: "100%",
    border: "1px solid #ddd",
    marginTop: 20
  }
};

/**
 * Concats the iframe src for the google map using latitude and longitude
 *
 * @param {String} lat
 * @param {String} lon
 * @return {String}
 */
const CreateSrc = (lat, lon) => {
  let src =
    "https://maps.google.com/maps?q=" +
    lat +
    "," +
    lon +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return src;
};

/**
 * @param {Object} props
 */
const GoogleMap = props => {
  let { classes, lat, lon, height } = props;
  return (
    <iframe
      title="Google Map"
      className={classes.iframe}
      height={height}
      src={CreateSrc(lat, lon)}
    />
  );
};

// height of the iframe
GoogleMap.defaultProps = {
  height: 500
};

GoogleMap.propTypes = {
  props: PropTypes.object
};

export default withStyles(styles)(GoogleMap);
