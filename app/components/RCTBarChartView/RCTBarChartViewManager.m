//  RCTBarChartView.m
//
//  Created by Justin Makaila on 6/16/15.

#import "RCTBarChartViewManager.h"
#import "RCTConvert+ChartData.h"

#import "RCTCharts-Swift.h"

@implementation RCTBarChartViewManager

RCT_EXPORT_MODULE()

- (UIView*)view {
  BarChartView *chartView = [[BarChartView alloc] init];
  chartView.rightAxis.enabled = NO;
  chartView.leftAxis.enabled = NO;
  
  return chartView;
}

#pragma mark - Chart Properties

// The description of the chart
RCT_EXPORT_VIEW_PROPERTY(descriptionText, NSString)

// The color behind the bars
RCT_EXPORT_VIEW_PROPERTY(gridBackgroundColor, UIColor)

// Whether or not to draw the background
RCT_EXPORT_VIEW_PROPERTY(drawGridBackgroundEnabled, BOOL)

// The border color
RCT_EXPORT_VIEW_PROPERTY(borderColor, UIColor)

// The border line width
RCT_EXPORT_VIEW_PROPERTY(borderLineWidth, CGFloat)

// The data to be displayed by the chart
RCT_CUSTOM_VIEW_PROPERTY(data, BarChartData, BarChartView) {
  BarChartData *data = json ? [RCTConvert BarChartData:json] : nil;
  
  if (data != nil) {
    view.data = data;
  }
}

RCT_EXPORT_VIEW_PROPERTY(highlightEnabled, BOOL)

#pragma mark Chart Values

RCT_EXPORT_VIEW_PROPERTY(drawValueAboveBarEnabled, BOOL)

#pragma mark Legend

// The position of the legend
RCT_CUSTOM_VIEW_PROPERTY(legendPosition, ChartLegendPosition, BarChartView) {
  view.legend.position = [RCTConvert NSInteger:json];
}

#pragma mark X-Axis

// The color of the x-axis
RCT_CUSTOM_VIEW_PROPERTY(xAxisColor, UIColor, BarChartView) {
  view.xAxis.axisLineColor = [RCTConvert UIColor:json];
}

// The width of the x-axis
RCT_CUSTOM_VIEW_PROPERTY(xAxisLineWidth, CGFloat, BarChartView) {
  view.xAxis.axisLineWidth = [RCTConvert CGFloat:json];
}

// The position of the labels of the x-axis
RCT_CUSTOM_VIEW_PROPERTY(xAxisLabelPosition, xAxisLabelPosition, BarChartView) {
  view.xAxis.labelPosition = [RCTConvert NSInteger:json];
}

// Whether gridlines should be drawn on the x-axis
RCT_CUSTOM_VIEW_PROPERTY(xAxisDrawGridlinesEnabled, BOOL, BarChartView) {
  view.xAxis.drawGridLinesEnabled = [RCTConvert BOOL:json];
}

@end
