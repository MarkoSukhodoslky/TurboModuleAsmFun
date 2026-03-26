//
//  RCTNativeAsmFun.h
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 21/3/26.
//

#import <Foundation/Foundation.h>
#import <NativeAsmFunSpec/NativeAsmFunSpec.h>
#import "add.h"
#import "sub.h"
#import "mul.h"
#import "div.h"
#import "and.h"
#import "or.h"
#import "eor.h"
#import "lsl.h"
#import "lsr.h"
#import "getpid.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTNativeAsmFun : NSObject <NativeAsmFunSpec>

@end

NS_ASSUME_NONNULL_END
