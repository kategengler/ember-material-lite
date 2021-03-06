# ember-material-lite

[![Build Status](https://travis-ci.org/truenorth/ember-material-lite.svg?branch=master)](https://travis-ci.org/truenorth/ember-material-lite)
[![Dependency Status](https://david-dm.org/truenorth/ember-material-lite.svg)](https://david-dm.org/truenorth/ember-material-lite)
[![devDependency Status](https://david-dm.org/truenorth/ember-material-lite/dev-status.svg)](https://david-dm.org/truenorth/ember-material-lite#info=devDependencies)
![NPM Version](https://img.shields.io/npm/v/ember-material-lite.svg)
[![Code Climate](https://codeclimate.com/github/truenorth/ember-material-lite/badges/gpa.svg)](https://codeclimate.com/github/truenorth/ember-material-lite)

<img src="http://i57.tinypic.com/ic6cdy.png" align="right" />

Google's [Material Design Lite](http://www.getmdl.io/) for Ember.js apps

**This addon requires ember >= `1.11.0`**

**NOTICE: This library is under heavy development. Please expect APIs to change, components to be removed, added, etc... until a 1.0 release**

## Installation

```
# ember-cli < 0.2.3
ember install:addon ember-material-lite
# ember-cli >= 0.2.3
ember install ember-material-lite
```

### Without SASS

This addon can be used without SASS (relying on pure CSS for styles). If you choose this path, you'll need to alter your app slightly.

1. Delete the `ember-cli-sass` NPM dependency that the installation blueprint will add to your app. You may also remove the bower dependency on `material-design-lite-src`, making sure to leave the one for (`material-design-lite` in place)
2. Your app.css should start with
```css
@import "bower_components/material-design-lite/material.css";
```

## Configuration

### Colors


<img src="http://i59.tinypic.com/ih4lro.png" align="right" />

You can customize the colors of material design elements globally by setting sass variables prior to importing the main styles. 

**app/styles/app.scss**
```scss
@import "_color-definitions";

$color-primary: $palette-teal-500;
$color-accent: $palette-pink-A200;

@import "material-design-lite";
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
