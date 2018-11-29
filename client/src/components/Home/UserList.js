import React from 'react';

const UserList = ({ users }) => (
	<div>
		<h2>List of Usernames of Users</h2>
		<p>(Saved on Sign Up in Firebase Database)</p>

		<ul>
			{Object.keys(users).map(key => (
				<li key={key}>{users[key].username}</li>
			))}
		</ul>
	</div>
);

export default UserList;
