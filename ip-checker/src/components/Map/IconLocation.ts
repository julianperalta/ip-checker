import L from "leaflet";
import { ReactComponent as LocationSVG } from "styles/images/icon-location.svg";

const IconLocation = L.icon({
    iconUrl: "styles/images/icon-location.svg",
    iconSize: [35, 35],
    className: "leaflet-venue-icon"
});

export default IconLocation;
