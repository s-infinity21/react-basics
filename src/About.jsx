import React from 'react';
import Common from './Common';
//import img2 from '../src/Images/IMG.png'; I have entered the path of my photo which is not present in this repository

const About = () => {
	return (
		<>
			<Common
				text='Curious to know '
				subhead='A Project Made By Shubh Chaurasia.'
				//imgsrc={img2}
				imgalt='about.png'
				link='/contact'
				headline='About Me'
				button='Contact Me'
			/>
		</>
	);
};

export default About;

