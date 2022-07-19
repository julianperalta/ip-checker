import React, { useState, useLayoutEffect } from "react";
// HOOKS
import { useMap } from "react-leaflet";
// UTILS
import { LatLng } from "leaflet";
// MODELS
import { Coordinates } from "models/Coordinates";
// COMPONENTS
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import IconLocation from "./IconLocation";
// STYLES
import "./Map.css";

const MapContent: React.FC<Coordinates> = ({ lat, lng }) => {
    const map = useMap();
    const [position, setPosition] = useState(new LatLng(lat, lng));

    useLayoutEffect(() => {
        const latLng = new LatLng(lat, lng);

        setPosition(latLng);
        map.panTo(latLng);
    }, [lat, lng, map]);

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={IconLocation}/>
        </>
    )
}

const Map: React.FC<Coordinates> = (props) => (
    <MapContainer center={[0, 0]} zoom={15} >
        <MapContent {...props} />
    </MapContainer>
);

Map.defaultProps = {
    lat: 0,
    lng: 0
};

export default Map;
