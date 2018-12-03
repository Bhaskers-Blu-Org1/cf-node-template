# cf-node-template
This project is a starting point for building node apps that will run on IBM Cloud functions.  The project is set up for Typescript development, and has the build tools required to create a deployable bundle from your source files.  You can use any project structure you like as long as everything is reachable from /src/index.ts.  `index.ts` is a key file in this project - don't modify the `main()` function name or the `global.main` export either or your code won't run on IBM Cloud Functions!

For unit testing, this project uses Mocha/Chai and Gulp with Typescript integration.  There's also an included `tsconfig.json` file so you can feel free to use `tsc` to transpile your code.  Add your unit tests and simply run `gulp test-unit` and your test code (also written in Typescript) will be transpile and piped through Gulp.

This project uses Webpack with Typescript integration to transpile and create a deployable bundle.  Simply run `npm build` to create a deployable build, or if you have the IBM CLI installed, run `npm build-deploy` and a bundle will be built and deployed using your configured CLI instance. 

Have fun and feel free to contribute!

# Getting Started
Simply run `npm install` to install all dependencies before coding.

The best way to leverage this project is to create your main class, then instantiate it and call it from within the `main()` function inside of `index.ts`.  From the entry point of your main class, you can then utilize a traditional development workflow with modular code, dependency injection, and unit testing with Mocha/Chai.

## Unit Testing
Add all tests under the `/test` folder using the format `[test].spec.ts`.  Then simply run `gulp test-unit` to run your unit tests will be transpiled and executed.  Currently the `nyan-cat` reporter is used for test output.

## Deployment
You can create a bundled build for your app running `npm build`.  Once you have the IBM CLI correctly installed and configured, simply run `npm run deploy` to run all required `ibmcloud` commands to successfully deploy your new Cloud Function.  If you want to do build and deploy, simply run `npm build-deploy` to perform both actions.
