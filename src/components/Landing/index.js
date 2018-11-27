import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './style.scss';
const Landing = () => {
	return (
		<div className="LandingBar">
			<span>Daily Coding Problem</span>
			<ul>
				<li>
					<Link to={routes.MICROSOFT}>Microsoft</Link>
				</li>
				<li>
					<Link to={routes.FACEBOOK}>Facebook</Link>
				</li>
				<li>
					<Link to={routes.GOOGLE}>Google</Link>
				</li>
			</ul>
		</div>
	);
};

export default Landing;
