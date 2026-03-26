//
//  lsr.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _lsr_asm
 
.align 4
 
_lsr_asm:
 
        lsr            x0,x0,x1
        ret
