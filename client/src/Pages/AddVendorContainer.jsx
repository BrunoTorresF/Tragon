import React, { Component } from 'react';
import AddVendor from '../components/AddVendor/AddVendor';
import { GOOGLE_API } from '../../../env';

const NE = { lat: 19.455115, lng: -99.140644 };
const SW = { lat: 19.36546, lng: -99.202587 };

export default class AddVendorContainer extends Component {
  // componentDidMount() {
  //   const script = document.createElement('script');
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}`;
  //   document.body.appendChild(script);
  // }
  //
  // geoCodeLocation = (address) => {
  //   console.log('Fire geoCodeLocation');
  //   const geocoder = new google.maps.Geocoder();
  //   geocoder.geocode(
  //     {
  //       'address': `${address}`,
  //       'region': 'MX'
  //     },
  //     (results, status) => {
  //       if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
  //         const {location} = results[0].geometry;
  //         return location;
  //       }
  //     }
  //   );
  // }

  generatePoints = (north, south) => {
    const points = [];
    const ptLat = Math.random() * (NE.lat - SW.lat) + SW.lat;
    const ptLng = Math.random() * (NE.lng - SW.lng) + SW.lng;
    points.push(+ptLat.toFixed(6), +ptLng.toFixed(6));
    return points;
  };

  submitVendor = (name, category, location) => {
    const points = this.generatePoints(NE, SW);
    console.log(points);
    axios
      .post('/addvendor', {
        name: `${name}`,
        category: `${category}`,
        location: {
          type: 'Point',
          coordinates: [points[0], points[1]],
        },
      })
      .then(res => {
        console.log(`${res} success`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="row">
        <center>
          <h2 style={{ color: 'grey' }}>Add a New Vendor</h2>
          <AddVendor submitVendor={this.submitVendor} />
        </center>
      </div>
    );
  }
}
