import React from 'react';
import Header from './Header';
import Map from './Map';
import VideoInformation from './VideoInformation';
import VideoPlayer from './VideoPlayer';
import Footer from './Footer';
import '!style!css!./../styles/style.css';
import MapData from './../../data/MapData';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      mapList : window.mapMarker,
      mapNow : window.mapMarker[0]
    };
    this.mapClick = this.mapClick.bind(this); // 맵 클릭을 Map.js에서 사용하려면 바인드 선언 필요
  };

  mapClick(event, map){
    // console.log("event", event);
    // console.log("map", map);
    this.setState({mapNow: map});
  };

  render(){
    return (
      <div>
        <div id="header" >
          <div id="outer">
            <div id="inner">
              <Header />
            </div>
          </div>
        </div>
        <div id="map">
          <div id="outer">
            <div id="inner">
              <Map marker={this.state.mapList} onClick={this.mapClick}/>
            </div>
          </div>
        </div >
        <div id="video">
          <div id="information">
            <div id="outer">
              <div id="inner">
                  <VideoInformation markerInfo={this.state.mapNow} />
              </div>
            </div>
          </div>
          <div id="player">
            <div id="outer">
              <div id="inner">
                <VideoPlayer markerInfo={this.state.mapNow} />
              </div>
            </div>
          </div>
        </div>
        <div id="compare"></div>
        <div id="footer">
          <div id="outer">
            <div id="inner">
                <Footer title={this.props.footerTitle} />
            </div>
          </div>
        </div>
      </div>
    )
  };

};

export default App;
