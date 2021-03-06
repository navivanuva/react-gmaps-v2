
React Gmaps V2
===========

A [Google Maps](https://developers.google.com/maps/documentation/javascript/) component for [React.js](http://facebook.github.io/react/)
( Updated version of React Gmaps based on [Michele Bertoli's react-gmaps](https://github.com/MicheleBertoli/react-gmaps) )

Features
--------

- Lazy Google Maps loading
- Easy to use

Installation
------------

```sh
$ npm install react-gmaps --save
```

Demo
------------

[http://react-gmaps.herokuapp.com/](http://react-gmaps.herokuapp.com/)

Usage
-----

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const params = {v: '3.exp', key: 'YOUR_API_KEY'};

class App extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('gmaps'));
```

Test
----

```sh
$ npm test
```
