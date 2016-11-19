import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

class Map extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.mapClick = this.mapClick.bind(this);
  // }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  };

  mapClick(event, map){
    // console.log("map clicked", event, map);
    this.props.onClick(event, event.map);
  };

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'100%'}
        lat={this.props.marker[0].lat}
        lng={this.props.marker[0].lng}
        zoom={17}
        loadingMessage={'welcome! codestates'}
        params={{v: '3.exp', key: 'AIzaSyApEhbvTjERHndLY1yOdaAES-Fr8-yPrCg'}}
        onMapCreated={this.onMapCreated}>
        {this.props.marker.map((map,i) => {
          return (<Marker lat={map.lat} lng={map.lng} key={i} onClick={this.mapClick.bind(this, {map})}/>);
        })};
        {/*<Marker
          lat={mapData.lat}
          lng={mapData.lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[1].lat}
          lng={coords[1].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[2].lat}
          lng={coords[2].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat={coords[3].lat}
          lng={coords[3].lng}
          draggable={true}
          onClick={this.onClick}
          onDragEnd={this.onDragEnd} />*/}
      </Gmaps>
    );
  };

};

export default Map;
