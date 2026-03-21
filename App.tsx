/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import NativeAsmFun from './specs/NativeAsmFun';

function add(value1: number, value2: number): number {
  return NativeAsmFun?.add(value1, value2);
}

function mul(value1: number, value2: number): number {
  return NativeAsmFun?.mul(value1, value2);
}

function sub(value1: number, value2: number): number {
  return NativeAsmFun?.sub(value1, value2);
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

  console.log('add', add(1, 2));

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
        }}
      >
        <Text>ADD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
