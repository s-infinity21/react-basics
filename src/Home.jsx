import React from 'react';
import Common from './Common';
import sc from '../src/Images/logo-full.png';

const Home = () => {
	return (
		<>
			<Common
				text='Welcome to my site Folks!'
				subhead='Sober N Happy!!'
				imgsrc={sc}
				imgalt='home.png'
				link='/service'
				headline='Sitcoholic'
				button='Get Started'
			/>
		</>
	);
};

export default Home;
