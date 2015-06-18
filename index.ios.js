'use strict';

// React components
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// Custom Components
var BarChart = require('./components/RCTBarChartView/BarChart');

// Dummy Data
var ChartData = require('./components/RCTChartData/RCTChartData.json');

var RCTCharts = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <BarChart 
          style={styles.barChart}
          data={ChartData}
          descriptionText={"Daily Progress"}
          groupSpace={8.0}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#0baf60"
  },
  barChart: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#ae4f2e"
  }
})

AppRegistry.registerComponent('RCTCharts', () => RCTCharts);
