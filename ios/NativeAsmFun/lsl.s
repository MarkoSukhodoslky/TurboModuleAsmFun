//
//  lsl.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _lsl_asm
 
.align 4
 
_lsl_asm:
 
        lsl            x0,x0,x1
        ret
