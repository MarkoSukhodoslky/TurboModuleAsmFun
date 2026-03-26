import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import NativeAsmFun from './specs/NativeAsmFun';
import { useEffect, useState } from 'react';
import { InstructionsSection } from './components/instructionsSection';
import { Instructions } from './types/instructionsType';
import { Operands } from './components/operands';
import { Output } from './components/output';

function add(value1: number, value2: number): number {
  return NativeAsmFun?.add(value1, value2);
}

function sub(value1: number, value2: number): number {
  return NativeAsmFun?.sub(value1, value2);
}

function mul(value1: number, value2: number): number {
  return NativeAsmFun?.mul(value1, value2);
}

function div(value1: number, value2: number): number {
  return NativeAsmFun?.div(value1, value2);
}

function and(value1: number, value2: number): number {
  return NativeAsmFun?.and(value1, value2);
}

function or(value1: number, value2: number): number {
  return NativeAsmFun?.or(value1, value2);
}

function eor(value1: number, value2: number): number {
  return NativeAsmFun?.eor(value1, value2);
}

function lsl(value1: number, value2: number): number {
  return NativeAsmFun?.lsl(value1, value2);
}

function lsr(value1: number, value2: number): number {
  return NativeAsmFun?.lsr(value1, value2);
}

function get_pid(): number {
  return NativeAsmFun?.get_pid();
}

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  const [v1, setV1] = useState<number>(0);
  const [v2, setV2] = useState<number>(0);
  const [op, setOp] = useState<Instructions>('ADD');
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    switch (op) {
      case 'ADD':
        setResult(add(v1, v2));
        break;
      case 'SUB':
        setResult(sub(v1, v2));
        break;
      case 'MUL':
        setResult(mul(v1, v2));
        break;
      case 'DIV':
        setResult(div(v1, v2));
        break;
      case 'AND':
        setResult(and(v1, v2));
        break;
      case 'OR':
        setResult(or(v1, v2));
        break;
      case 'XOR':
        setResult(eor(v1, v2));
        break;
      case 'LSL':
        setResult(lsl(v1, v2));
        break;
      case 'LSR':
        setResult(lsr(v1, v2));
        break;
      case 'PID':
        setResult(get_pid());
        break;
      default:
        setResult(0);
    }
  }, [v1, v2, op]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: safeAreaInsets.bottom,
          paddingTop: safeAreaInsets.top,
        },
      ]}
    >
      <View
        style={{
          height: '100%',
          paddingHorizontal: 16,
        }}
      >
        <InstructionsSection setOp={setOp} op={op} />
        <Operands setV1={setV1} setV2={setV2} v1={v1} v2={v2} />
        <Output result={result} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
});

export default App;
