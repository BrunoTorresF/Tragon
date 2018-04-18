import React from 'react';
import Button from 'material-ui/Button';
import Menu, {MenuItem} from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';

class LocationMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="Menu">
        <Button
          style={{ backgroundColor: 'white' }}
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
      Location
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
          <MenuItem onClick={this.handleClose}>Mexico, City</MenuItem>
          <MenuItem onClick={this.handleClose}>Est. De Mexico</MenuItem>
          <MenuItem onClick={this.handleClose}>Colonia Tabacalera</MenuItem>
          <MenuItem onClick={this.handleClose}>Colonia del valle</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default LocationMenu;
