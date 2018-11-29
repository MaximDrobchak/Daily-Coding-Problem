import React from 'react';
import { auth } from '../../firebase';

import { Button } from './../Elements';

export const SingOutButton = () => (
	<Button style={{ alignSelf: 'end' }} onClick={auth.doSignOut}>
		Sign Out
	</Button>
);
