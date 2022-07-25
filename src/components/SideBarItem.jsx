const SideBarItem = ({ name, lat, lon, imgURL }) => {
	return (
		<div className='side-bar-list-item'>
			<img src={imgURL} alt='' />
			<div className='info-wrapper'>
				<h5 className='event-name'>{name}</h5>
				<div className='coordinates'>
					<p className='lat'>Lat: {lat}</p>
					<p className='lon'>Lon: {lon}</p>
				</div>
			</div>
		</div>
	);
};

export default SideBarItem;
