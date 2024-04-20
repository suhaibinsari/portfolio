// components/SmoothScroll.tsx

import React from 'react';
import { Link } from 'react-scroll';

// Define the props interface for the SmoothScroll component
interface SmoothScrollProps {
	to: string; // Target scroll position
	children?: React.ReactNode; // Optional children
}

// Define the SmoothScroll functional component
const SmoothScroll: React.FC<SmoothScrollProps> = ({ to, children }) => {
	return (
		// Use the Link component from react-scroll to create smooth scrolling
		<Link
			to={to} // Target scroll position
			spy={true} // Enable scroll spy
			smooth={true} // Enable smooth scrolling
			offset={-70} // Adjust the offset as needed
			duration={500} // Adjust the scroll duration as needed
		>
			{children} {/* Render any children within the Link component */}
		</Link>
	);
};

export default SmoothScroll; // Export the SmoothScroll component as the default export
