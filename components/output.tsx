import { Text, View } from 'react-native';

function toRadix(value: number, radix: number): string {
  if (!Number.isSafeInteger(value)) {
    throw new TypeError('value must be a safe integer');
  }

  const digits = Math.ceil(64 / Math.log2(radix));
  const twosComplement =
    value < 0 ? BigInt(radix) ** BigInt(digits) + BigInt(value) : value;

  return twosComplement.toString(radix).padStart(digits, '0');
}

export const Output = ({ result }: any) => {
  return (
    <View style={{ backgroundColor: 'red', height: 300, width: '100%' }}>
      <Text style={{ color: 'white', fontSize: 42 }}>{result}</Text>
      <Text style={{ color: 'white', fontSize: 16 }}>
        0x{toRadix(result, 2)}
      </Text>
    </View>
  );
};
