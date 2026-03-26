//
//  xor.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 26/3/26.
//
.globl _eor_asm
 
.align 4
 
_eor_asm:
 
        eor            x0,x0,x1
        ret
