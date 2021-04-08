# Kinamo

[description text]
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Structure

As we are using React > v16, we use React hooks. There is no need to mix Class based and functional 
components. Thus, we only implement functional components and make use of hooks. I don't see any 
usecase for lifecycle hooks. Thus we should not mix things up and use React as it was meant to be 
used.

### root level folders:

- `/src/components`  -  containes all components that do not make a page on their own and are pontentially reused
- `/src/layouts`  -  high level Layout components that implement a different routing. Right now, this is only the App itself and Permalinks
- `/src/models`  -  application-wide interfaces and types that are not bound to a specific API
- `/src/pages`  -  Content Pages. Each file is basically containing the Scaffold for one page of the application
- `/src/store`  -  Redux implementation. Anything that is about the application state goes here

## Install

```bash
# download repo
git clone git@github.com:sumo-rhine/kinamo.git
cd kinamo
npm install

# install firebase-tools globally - you may need sudo on linux
npm i -g firebase-tools
firebase login
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Deploy to the LIVE firebase hosting site:

```bash
firebase deploy --only=hosting
```

**Depoly to a preview channel**
```bash
firebase hosting:channel:deploy <preview_name>
```

Where we should a semantic versioning tag of the previewed **minor** version, 
i.e.: `v0.2`.  

## Firebase

New firebase rules and indices can be deployed like:

```bash
firebase deploy --only=firebase
```
