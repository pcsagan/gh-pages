import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

class LeafletEmbed extends React.Component {
  render() {
    return (
      <MapContainer
        center={this.props.position}
        style={{ width: '640px', height: '390px' }}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer attribution='' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={this.props.position}>
          <Popup>
            {this.props.popup}
          </Popup>
        </Marker>
      </MapContainer>
    );
  }

  _onReady(event) {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }
}

export default LeafletEmbed;
