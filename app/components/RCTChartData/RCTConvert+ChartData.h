//
//  RCTConvert+ChartData.h
//  
//
//  Created by Justin Makaila on 6/17/15.
//
//

#import "RCTConvert.h"
#import "RCTCharts-Swift.h"

// All Charts

@interface RCTConvert (ChartData)

+ (ChartData *)ChartData:(id)json;

@end

@interface RCTConvert (ChartDataSet)

+ (ChartDataSet *)ChartDataSet:(id)json;

@end

@interface RCTConvert (ChartDataEntry)

+ (ChartDataEntry *)ChartDataEntry:(id)json;

@end

// Bar Charts

@interface RCTConvert (BarChartData)

+ (BarChartData *)BarChartData:(id)json;

@end

@interface RCTConvert (BarChartDataSet)

+ (BarChartDataSet *)BarChartDataSet:(id)json;

@end

@interface RCTConvert (BarChartDataEntry)

+ (BarChartDataEntry *)BarChartDataEntry:(id)json;

@end