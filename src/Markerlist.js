import React, { Component } from 'react';
import Markers from './Markers.js'
import {Marker} from 'google-maps-react';



class Markerlist extends Component {


  constructor(props) {
      super(props)
      this.state = {
          markers: [
          {
            name: "Addeertz Menswear Store",
            id: "Addeertz",
            title: "Menswear Store",
            position: {
              lat: 52.529600,
              lng: 13.403557
            }
          },
          {
            name: "Wolfen Store",
            id: "Wolfen",
            title: "Store",
            position: {
              lat: 52.527909,
              lng: 13.402229
            }
          },
          {
            name: "Konk Store",
            id: "konk",
            title: "Store",
            position: {
              lat: 52.527913,
              lng: 13.396979
            }
          }
        ]
      }
  }




  render() {



   const {markers} = this.state


    return (

        <div>
      {markers.map ((data, i) =>
        <Markers key ={i}
        {...data}
        />
      )}
        </div>

    );
  }
}


export default Markerlist
