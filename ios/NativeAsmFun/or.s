//
//  or.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _or_asm
 
.align 4
 
_or_asm:
 
        orr            x0,x0,x1
        ret
