var {
  StyleSheet,
  View
} = React

// Load BarChart component & dependencies
var BarChart = require('./components/RCTBarChartView/BarChart')
var ChartData = require('./components/RCTChartData/RCTChartData.json')

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BarChart 
          style={styles.barChart}
          data={ChartData}
          descriptionText='Daily Progress'
          groupSpace={8}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0baf60',
  },
  barChart: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#ae4f2e',
  },
})

module.exports = App