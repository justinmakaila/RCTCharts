//
//  RCTConvert+ChartData.m
//  
//
//  Created by Justin Makaila on 6/17/15.
//
//

#import "RCTConvert+ChartData.h"

// All Charts

@implementation RCTConvert (ChartData)

+ (ChartData *)ChartData:(id)json {
  json = [self NSDictionary:json];
  
  NSArray *dataSetsJSON = json[@"dataSets"];
  NSMutableArray *dataSets = [NSMutableArray array];
  
  for (NSDictionary *set in dataSetsJSON) {
    ChartDataSet *dataSet = [self ChartDataSet:set];
    [dataSets addObject:dataSet];
  }
  
  return [[ChartData alloc] initWithXVals:json[@"xValues"] dataSets:dataSets];
}

@end

@implementation RCTConvert (ChartDataSet)

+ (ChartDataSet *)ChartDataSet:(id)json {
  json = [self NSDictionary:json];
  
  NSArray *chartDataEntriesJSON = json[@"yValues"];
  NSMutableArray *chartDataEntries = [NSMutableArray array];
  
  for (NSDictionary *entry in chartDataEntriesJSON) {
    ChartDataEntry *dataEntry = [self ChartDataEntry:entry];
    [chartDataEntries addObject:dataEntry];
  }
  
  return [[ChartDataSet alloc] initWithYVals:chartDataEntries label:json[@"label"]];
}

@end

@implementation RCTConvert (ChartDataEntry)

+ (ChartDataEntry *)ChartDataEntry:(id)json {
  json = [self NSDictionary: json];
  
  double value = [json[@"value"] doubleValue];
  NSInteger xIndex = [json[@"xIndex"] integerValue];
  id data = json[@"data"];
  
  return [[ChartDataEntry alloc] initWithValue:value xIndex:xIndex data:data];
}

@end

#pragma mark - Bar Charts

@implementation RCTConvert (BarChartDataSet)

+ (BarChartDataSet *)BarChartDataSet:(id)json {
  json = [self NSDictionary:json];
  
  NSString *label = json[@"label"];
  NSString *hexString = json[@"color"];
  BOOL drawValues = json[@"drawValues"];

  UIColor *dataSetColor = [RCTConvert UIColor:hexString];


  NSArray *chartDataEntriesJSON = json[@"yValues"];
  NSMutableArray *chartDataEntries = [NSMutableArray array];
  for (NSDictionary *entry in chartDataEntriesJSON) {
    BarChartDataEntry *dataEntry = [self BarChartDataEntry:entry];
    [chartDataEntries addObject:dataEntry];
  }
  
  
  NSLog(@"Bar chart data set:\n\tyValues: %@\n\tlabel: %@\n", chartDataEntries, label);
  
  BarChartDataSet *dataSet = [[BarChartDataSet alloc] initWithYVals:chartDataEntries label:label];
  
  [dataSet setColor:dataSetColor];
  [dataSet setDrawValuesEnabled:drawValues];
  
  return dataSet;
}

@end

@implementation RCTConvert (BarChartData)

+ (BarChartData *)BarChartData:(id)json {
  json = [self NSDictionary:json];
  
  NSArray *xValues = json[@"xValues"];
  NSArray *dataSetsJSON = json[@"dataSets"];
  
  CGFloat spacing = [RCTConvert CGFloat:json[@"spacing"]];
  
  NSMutableArray *dataSets = [NSMutableArray array];
  
  for (NSDictionary *set in dataSetsJSON) {
    BarChartDataSet *dataSet = [self BarChartDataSet:set];
    [dataSets addObject:dataSet];
  }
  
  NSLog(@"Bar chart data:\n\txValues: %@\n\tdataSets: %@\n", xValues, dataSets);
  
  BarChartData *data = [[BarChartData alloc] initWithXVals:xValues dataSets:dataSets];
  data.groupSpace = spacing;
  
  return data;
} 

@end

@implementation RCTConvert (BarChartDataEntry)

+ (BarChartDataEntry *)BarChartDataEntry:(id)json {
  json = [self NSDictionary:json];
  
  // TODO: Consider stacked bars
  double value = [json[@"value"] doubleValue];
  NSInteger xIndex = [json[@"xIndex"] integerValue];
  id data = json[@"data"];
  
  return [[BarChartDataEntry alloc] initWithValue:value xIndex:xIndex data:data];
}

@end
