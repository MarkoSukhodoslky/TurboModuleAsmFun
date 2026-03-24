//
//  add.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 23/3/26.
//
.globl _add_asm
 
.align 4
 
_add_asm:
 
        add            x0,x0,x1
        ret
 
