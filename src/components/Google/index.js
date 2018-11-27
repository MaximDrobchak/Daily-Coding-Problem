import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import styled from 'styled-components';

import Task1 from './Tasks/Task1';

const Navigation = () => {
	return (
		<Router>
			<div style={{ textAlign: 'center' }}>
				<NavBar>
					<Link to="/google/task1">Task № 1</Link>
				</NavBar>

				<div>
					<Route
						exect
						path="/google/task1"
						component={Task1}
					/>
				</div>
			</div>
		</Router>
	);
};

const NavBar = styled.div`
	margin: 10 10 10 10;
	padding: 10 10 10 10;
	display: grid;
	grid-template-columns: repeat(3, 120px);
	grid-gup: 10px;
`;

export default Navigation;
