import { useState } from 'react';
import SideBarItem from './SideBarItem';

const SideBar = ({ events, handleSideBarState, sideBarState }) => {
	function toggleSideBar() {
		handleSideBarState(!sideBarState);
	}

	return (
		<div className={sideBarState ? 'side-bar' : 'side-bar closed'}>
			<button onClick={toggleSideBar}>
				<div>&#9660;</div>
			</button>
			<div className='heading'>
				<h2>Events List</h2>
			</div>
			<div className='overflow'>
				<div className='list-container'>
					{events.map(el => {
						if (el.geometries[0].type !== 'Polygon') {
							let coordinates = el.geometries[0].coordinates;
							let finalIcon;

							switch (el.categories[0].id) {
								case 15:
									finalIcon = 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/iceberg.svg';
									break;

								case 8:
									finalIcon = 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/fire.svg';
									break;

								case 10:
									finalIcon = 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/storm.svg';
									break;

								case 12:
									finalIcon = 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/volcano.svg';
									break;

								default:
									finalIcon = 'https://raw.githubusercontent.com/pulkit-jasti/Wildfire-tracker/master/icons/storm.svg';
									break;
							}

							return <SideBarItem key={el.id} imgURL={finalIcon} name={el.title} lat={coordinates[1]} lon={coordinates[0]} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
