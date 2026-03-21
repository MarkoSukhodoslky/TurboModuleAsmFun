//
//  RCTNativeAsmFun.m
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 21/3/26.
//

#import "RCTNativeAsmFun.h"

@implementation RCTNativeAsmFun

- (id) init {
  if (self = [super init]) {
  }
  return self;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeAsmFunSpecJSI>(params);
}

//- (NSNumber * _Nullable)add:(NSNumber *)value1 withB:(NSNumber *)value2 {
//  return NULL;
//}

- (nonnull NSNumber *)add:(double)value1 value2:(double)value2 {
  return  @1;
}

- (nonnull NSNumber *)mul:(double)value1 value2:(double)value2 {
  return @2;
}

- (nonnull NSNumber *)sub:(double)value1 value2:(double)value2 {
  return @3;
}


+ (NSString *)moduleName
{
  return @"NativeAsmFun";
}




@end
