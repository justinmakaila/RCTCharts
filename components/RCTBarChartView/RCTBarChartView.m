//  RCTBarChartView.m
//
//  Created by Justin Makaila on 6/16/15.

#import "RCTBarChartView.h"
#import "RCTConvert+ChartData.h"
#import "RCTCharts-Swift.h"

@implementation RCTBarChartView

RCT_EXPORT_MODULE()

- (UIView*)view {
  BarChartView *chartView = [[BarChartView alloc] init];
  chartView.rightAxis.enabled = NO;
  
  return chartView;
}

// The description of the chart
RCT_EXPORT_VIEW_PROPERTY(descriptionText, NSString)

// The color behind the bars
RCT_EXPORT_VIEW_PROPERTY(gridBackgroundColor, UIColor)

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

RCT_CUSTOM_VIEW_PROPERTY(groupSpace, CGFloat, BarChartView) {
  ((BarChartData*)view.data).groupSpace = [RCTConvert CGFloat:json];
}

@end
