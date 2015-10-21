# angular-skel

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.


## Getting Started

To get you started you can simply clone the angular-skel repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-skel. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-skel

Clone the angular-skel repository using [git][git]:

```
git clone https://github.com/valeriodid/angular-skel.git
cd public
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000/#/`.


## Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.
