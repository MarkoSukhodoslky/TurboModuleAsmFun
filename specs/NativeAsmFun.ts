import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  add(value1: number, value2: number): number;
  sub(value1: number, value2: number): number;
  mul(value1: number, value2: number): number;
  div(value1: number, value2: number): number;
  and(value1: number, value2: number): number;
  or(value1: number, value2: number): number;
  eor(value1: number, value2: number): number;
  lsl(value1: number, value2: number): number;
  lsr(value1: number, value2: number): number;
  get_pid(): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeAsmFun');
