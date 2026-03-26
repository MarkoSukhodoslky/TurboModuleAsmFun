//
//  and.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _and_asm
 
.align 4
 
_and_asm:
 
        and            x0,x0,x1
        ret
