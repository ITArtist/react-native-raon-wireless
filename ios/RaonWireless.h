#import <React/RCTBridgeModule.h>
#import "RSKSW/RSKSWICRProtocol.h"

@interface RaonWireless : NSObject <RCTBridgeModule> {
  RSKSWICRProtocol *icrp;
}

@end
