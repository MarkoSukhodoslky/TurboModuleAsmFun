//
//  mul.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _mul_asm
 
.align 4
 
_mul_asm:
 
        mul            x0,x0,x1
        ret
