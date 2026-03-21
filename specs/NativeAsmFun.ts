import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  add(value1: number, value2: number): number;
  sub(value1: number, value2: number): number;
  mul(value1: number, value2: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeAsmFun');
