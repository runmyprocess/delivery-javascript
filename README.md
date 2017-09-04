# Delivery JavaScript Library

## Presentation

This JavaScript library is intended to be used  by RunMyProcess Delivery Team in order to implement standard functions.

__Version: 1.0__

Copyright (c) [Fujitsu RunMyProcess](https://www.runmyprocess.com/) - 2017

## Authors

-   [David Courtaigne](mailto:dcourtaigne@runmyprocess.com)
-   [Franck Martin](mailto:fmartin@runmyprocess.com)

# How to Use the Library ?

## Process 1 - Import Library

In order to use the Delivery's JavaScript Library, you first need to import it into your RunMyProcess project:

1.  Launch the [RunMyProcess IDE](https://portal.runmyprocess.com/ide/)
2.  Open your project's __Web Interface__
3.  Click on the __JavaScript__ tab
4.  Click on the __Add__ button in the __Footers__ section
5.  Select the __URL__ radio button in the popup windows
6.  Type the library's URL in the __URL__ text field
7.  Click on the __Validate__ button
8.  You're done

## Process 2 - Use Library

TODO

-   All the functions are accessible under the __delivery__ namespace
-   Documentation URL ?

## What is the Library URL ?

TODO

# How to Contribute ?

## How to write a function ?

TODO

The goal of the JavaScript Library is to minimize the amount of JavaScript code written for a specific project. In order to fulfill this goal,
the library shall offer high-level functions responding to concrete and recurring use cases.


## How to write test cases ?

TODO

Tests cases are written in the __/test__ folder. Every single function shall be thoroughly tested.

## How to write documentation ?

Documentation is written as [JSDoc comments](http://usejsdoc.org/) within your code. Every single function shall be thoroughly documented.


# Build Process

## Process 1 - Lint Code

### Usage

```
npm run lint
```

| | |
| --- | --- |
| Input | All __.js__ files from the __/src__ directory and subdirectories. |
| Output | Lint errors are printed to the console. |

### What is ESLint ?

“Linting” analyses your code for potential errors or deviation from syntactical standards. You’ll never miss a closing bracket or undeclared variable again! ESLint is a pluggable linting tool. Every rule is a plugin so it can be configured to your liking.

-   [https://www.npmjs.com/package/gulp-eslint/](https://www.npmjs.com/package/gulp-eslint/)
-   [http://eslint.org/](http://eslint.org/)

### ESLint Configuration

ESLint is configured through the __.eslintrc.json__ file in your project folder.

We use the linting rules defined by [Javascript Standard](https://standardjs.com/rules.html#javascript-standard-style).

_Note: Atom will automatically use the .eslintrc configuration file in your project directory, which ensures that linting rules are the same in your text editor and in the build process._

## Process 2 - Test Code

### Usage

```
npm run test
```

| | |
| --- | --- |
| Input | All __.js__ files from the __/test__ directory and subdirectories. |
| Output | Test errors are printed to the console. |


### What is Mocha ?

Mocha is a JavaScript testing framework which can run tests in Node.js or a browser. It supports asynchronous testing and is often paired with Chai assertion library to enable test code to be expressed in a readable style.

-   [https://www.npmjs.com/package/gulp-mocha/](https://www.npmjs.com/package/gulp-mocha/)
-   [https://www.npmjs.com/package/chai](https://www.npmjs.com/package/chai)
-   [https://mochajs.org/](https://mochajs.org/)
-   [http://chaijs.com/](http://chaijs.com/)



## Process 3 - Document Code

### Usage

```
npm run doc
```

| | |
| --- | --- |
| Input | All __.js__ files from the __/src__ directory and subdirectories. |
| Output | HTML documentation is generated to the __/doc__ directory. |

### What is Documentation.js ?

Documentation.js is a documentation generator. It's used to generates documentation from comments within your code. Documentation processes JavaScript comments in the JSDoc format.

-   [https://www.npmjs.com/package/gulp-documentation/](https://www.npmjs.com/package/gulp-documentation/)
-   [http://documentation.js.org/](http://documentation.js.org/)


## Process 4 - Transpile Code



### What is Babel ?

Babel is a transpiler for JavaScript best known for its ability to turn ES6 (the next version of JavaScript) into code that runs in your browser today.

-   [https://www.npmjs.com/package/gulp-babel/](https://www.npmjs.com/package/gulp-babel/)
-   [https://babeljs.io/](https://babeljs.io/)

### Configuration

Babel is configured through the __.babelrc__ file in your project folder.
http://babeljs.io/docs/usage/babelrc/

## Process 5 - Minify Code

### Usage

```
npm run minify
```

| | |
| --- | --- |
| Input | All __.js__ files from the __/src__ directory and subdirectories. |
| Output |  |

### What is UglifyJS2 ?

UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit.

-   [https://www.npmjs.com/package/gulp-uglify/](https://www.npmjs.com/package/gulp-uglify/)
-   [https://github.com/mishoo/UglifyJS2](https://github.com/mishoo/UglifyJS2)

## Process 6 - Build Code

### Usage

```
npm run build
```

| | |
| --- | --- |
| Input | All __.js__ files from the __/src__ directory and subdirectories. |
| Output |  |

### What is Gulp ?

Gulp is a JavaScript task runner for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

-   [https://www.npmjs.com/package/gulp](https://www.npmjs.com/package/gulp)
-   [https://gulpjs.com/](https://gulpjs.com/)

### Configuration

Gulp is configured through the __gulpfile.js__ file in the project's folder.

## Process 7 - Publish Code

TODO

-   S3 bucket ?
-   Done server side with a Gitlab-CI job
-   Publish the documentation with the library
