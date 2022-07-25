import L from 'leaflet';

const icebergIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/iceberg.svg',
	iconRetinaUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/iceberg.svg',
	iconAnchor: null,
	popupAnchor: [0, -20],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: 'leaflet-div-icon',
});

const fireIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/fire.svg',
	iconRetinaUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/fire.svg',
	iconAnchor: null,
	popupAnchor: [0, -20],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: 'leaflet-div-icon',
});

const stormIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/storm.svg',
	iconRetinaUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/storm.svg',
	iconAnchor: null,
	popupAnchor: [0, -20],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: 'leaflet-div-icon',
});

const volcanoIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/volcano.svg',
	iconRetinaUrl: 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/volcano.svg',
	iconAnchor: null,
	popupAnchor: [0, -20],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(30, 30),
	className: 'leaflet-div-icon',
});

export { icebergIcon, fireIcon, stormIcon, volcanoIcon };
