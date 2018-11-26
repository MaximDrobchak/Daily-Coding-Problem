import React from 'react';
import { auth } from '../../firebase';

export const SingOutButton = () => (
	<button type="button" onClick={auth.doSignOut}>
		Sign Out
	</button>
);
