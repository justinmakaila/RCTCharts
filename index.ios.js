// React global
React = require('react-native')

// Load App Registry & App
var { AppRegistry } = React
var App = require('./app')

// Register App w/ App Registry
AppRegistry.registerComponent('App', () => App)