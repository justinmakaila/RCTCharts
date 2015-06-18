var {
  StyleSheet,
  View
} = React

// Load BarChart component & dependencies
var BarChart = require('./components/RCTBarChartView/BarChart')
var ChartData = require('./components/RCTChartData/RCTChartData.json')

class App extends React.Component {
  render() {
    var fontName = 'Avenir-Medium'
    var fontSize = 13

    return (
      <View style={styles.container}>
        <BarChart 
          style={styles.barChart}
          data={ChartData}
          descriptionText=''
          groupSpace={150}
          drawGridBackgroundEnabled={false}
          highlightEnabled={false}
          drawValueAboveBarEnabled={true}
          legendForm={2}
          legendFormLineWidth={3}
          legendPosition={8}
          legendFont={fontName}
          legendFontSize={fontSize}
          xAxisColor='#000'
          xAxisLineWidth={1.5}
          xAxisLabelPosition={1}
          xAxisDrawGridlinesEnabled={false}
          xAxisFont={fontName}
          xAxisFontSize={fontSize}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  barChart: {
    position:"absolute",
    top: 200,
    bottom: 200,
    left: 0,
    right: 0,
    backgroundColor: "#fff"
  },
})

module.exports = App