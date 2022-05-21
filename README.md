## React

### Creating Enviorment

Create a React new app in the project directory

`npx create-react-app my-app --template redux`

Run the app:
`npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Enable ES6
`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

## Bootstrap

`npm install bootstrap`

Index.js must include:
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

## Redux

Manages state through a tool instead of managing state from root component and props drilling through various levels of components. An unrestricted global state management allows inconsistencies in state for components. Redux applies strict rules to the global state to prevent these potential errors.
Redux contains a singular global state store in the form of a JSON object. The store can hold anything loaded from a server or internal application states such as user information or list item states. Redux restricts components access to the global state store with redux actions and redux reducers.
Redux actions are JSON object containing an action type (string) and payload of additional data. They define the different actions that can performed by the application. Redux reducers defines what should happen to the store when a redux action happens. In short, components can only interact with the state by triggering Redux actions. This is refered to as a unidirectional data flow.
If you plan on resusing components with different data throughout the app, then have all data connected to a parent component container which is connected to the store. This container then parses the data and distributes to the resusible components.

## Thunk

Dispatch an action which calls a thunk (the middleware) which does the API call. This creates a normal action with the API responce which is sent to the reducer within the store.
