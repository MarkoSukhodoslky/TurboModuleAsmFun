//
//  div.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _div_asm
 
.align 4
 
_div_asm:
 
        sdiv            x0,x0,x1
        ret
