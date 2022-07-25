import { Marker, Popup } from 'react-leaflet';
import { icebergIcon, fireIcon, stormIcon, volcanoIcon } from './Icon.js';

const RenderMarkers = ({ events }) => {
	//console.log(events);
	let count = 0;
	return (
		<div>
			{events.map(el => {
				if (el.geometries[0].type !== 'Polygon') {
					let coordinates = el.geometries[0].coordinates;
					let finalIcon;

					switch (el.categories[0].id) {
						case 15:
							finalIcon = icebergIcon;
							break;

						case 8:
							finalIcon = fireIcon;
							break;

						case 10:
							finalIcon = stormIcon;
							break;

						case 12:
							finalIcon = volcanoIcon;
							break;

						default:
							finalIcon = stormIcon;
							break;
					}

					return (
						<Marker position={[coordinates[1], coordinates[0]]} icon={finalIcon} key={el.id}>
							<Popup>{el.title}</Popup>
						</Marker>
					);
				}
			})}
		</div>
	);
};

export default RenderMarkers;
