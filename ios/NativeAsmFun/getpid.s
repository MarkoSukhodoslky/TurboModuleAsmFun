//
//  getpid.s
//  TurboModuleAsmFun
//
//  Created by Marko Sulhodolskyi on 24/3/26.
//
.globl _get_pid_asm
 
.align 2
 
_get_pid_asm:
 
        mov x16, #20
        svc #0x80       ;result is in x0
        ret
