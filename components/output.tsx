import { Text, View } from 'react-native';

export const Output = ({ result }: any) => {
  return (
    <View style={{ backgroundColor: 'red', height: 300, width: '100%' }}>
      <Text style={{ color: 'white', fontSize: 42 }}>{result}</Text>
    </View>
  );
};
