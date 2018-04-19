import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import {GOOGLE_API} from '../../../../env';

// const googleMapKey = process.env.GOOGLE_API;
// const googleMapPath = 'https://maps.googleapis.com/maps/api/js?key=';

const MyGoogleMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}`,
    loadingElement: <div style={{height: `100%`}} />,
    containerElement: <div style={{height: `240px`, width:`300px`,bottom:'100px'}} />,
    mapElement: <div style={{height: `100%`}} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{lat: props.loc.coordinates[0], lng: props.loc.coordinates[1]}}
  >
    <Marker
      position={{
        lat: props.loc.coordinates[0],
        lng: props.loc.coordinates[1],
      }}
    />
  </GoogleMap>
));

export default MyGoogleMap;
// resize to fit with the result page with vendor card
