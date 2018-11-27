
<strong>The project is under development</strong> <hr />
And gradually it will be published, since it will be completed, on a free hosting [www.samikoma.zzz.com.ua](http://samikoma.zzz.com.ua). <br />

This application is a sandbox for [Daily Coding Problem](https://www.dailycodingproblem.com/) <br />
I get a task every day for my personal account [Daily Coding Problems](https://www.dailycodingproblem.com/). 
### You can go without registration and try to solve the problems that I have completed and published here. <br />
You can also register and publish your tasks, which will be for everyone.<br />
* Tasks are divided into 4 categories:
	* Google
  * Microsoft
  * Facebook
  * Amazon <br />
##
These are the names of the corporations which provided the tasks.

## Features

* uses:
  * React (create-react-app)
  * firebase 6.0.0
  * react-router 4.2.0
  * redux
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Database: Users

### If you want to run it locally you will need : 
create  in folder <code>src/firebase</code> file <code>firebase.js</code> <br />
&ensp; And fill it in next :<br/><br/>
<code>import * as firebase from 'firebase/app';<br/>
import 'firebase/auth';<br/>
import 'firebase/database';<br/>

const config = { // Firebase data API<br/>
&ensp;  apiKey: 'XXXX',<br/>
&ensp;	authDomain: 'XXXXXX',<br/>
&ensp;	databaseURL: 'XXXXXXX',<br/>
&ensp;	projectId: 'XXXXXXX',<br/>
&ensp;	storageBucket: 'XXXXXXX',<br/>
&ensp;	messagingSenderId: 'XXXXXXXX',<br/>
};<br/>

if (!firebase.apps.length) {<br/>
&ensp;	firebase.initializeApp(config);<br/>
}

export const auth = firebase.auth();<br/>
export const db = firebase.database();<br/>
// export const provider = new firebase.auth.FacebookAuthProvider();
</code>
### Use your own Firebase Credentials

* visit https://firebase.google.com/ and create a Firebase App
* copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
* activate Email/Password Sign-In Method in your Firebase App
In the project directory, you can run:

### `npm install # or yarn install`

Start:  <br />
###	`npm start # or yarn start`

