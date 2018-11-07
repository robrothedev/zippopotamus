import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Snackbar } from "@material-ui/core";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

class SimpleSnackbar extends React.Component {
  state = { open: false, dismissed: false };

  /**
   * We need to show the snackbar if they click submit for errors or success
   * but we also want to hide it if the user clicks the snackbar to dismiss it.
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    // only show the snackbar if it has not been dismissed and the props ask it to be open
    if (nextProps.open === true && prevState.dismissed === false) {
      prevState.open = true;
    } else {
      // reset dismissed so if they submit we show the snackbar
      prevState.dismissed = false;
    }
    return null;
  }

  /**
   * Called when the snackbar has been clicked so we can dismiss it
   */
  handleClose = () => {
    this.setState({ open: false, dismissed: true });
  };

  render() {
    let { classes } = this.props;
    let { open } = this.state;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={open}
          message={
            <span id="message-id">
              No city or state were found with that zip code.
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              &times;
            </IconButton>
          ]}
        />
      </div>
    );
  }
}
export default withStyles(styles)(SimpleSnackbar);
