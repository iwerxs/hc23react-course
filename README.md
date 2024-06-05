## Hitesh Choudhary 2023 React Course

[React Project Links](https://github.com/hiteshchoudhary/react-english)

[React Dev](https://react.dev)

The classic way of creating a React App (CRA) is with the command:

```
npx create-react-app
```

this is now a bloated way of creating a 'basic' React app, installing ALL of the bundles

### There are different frameworks that complement React

- [Nextjs]()

### Pre-configure React with a Bundler

- [Vite](https://vitejs.dev)  French for 'fast'
- <code>npm create vite@latest</code>

### Package JSON

this is a centralised index of the application containing all of the core information needed for the app to work successfully

### React Core

how to invoke the application depends on the 'keys' within package.json file
not all initialisations of the React App contain the same package.json information

CRA <code>npm run start</code>

Vite <code>npm run dev</code>

these are 'Development' scripts, that are used locally to CRUD (create read update delete) parts of the application

### Building the Application for production

```
npm run build
```

is the command needed to build a production of the application.

#### When initiating the App the JavaScript is injected into the index.html file prior to loading the DOM 
