import { StyleSheet, Text, View } from 'react-native';

function toHex(value: number): string {
  const big =
    value < 0 ? BigInt(2) ** BigInt(64) + BigInt(value) : BigInt(value);
  const hex = big.toString(16).toUpperCase().padStart(16, '0');

  return hex.match(/.{1,4}/g)?.join(' ') ?? hex;
}

function toBin(value: number): string {
  const big =
    value < 0 ? BigInt(2) ** BigInt(64) + BigInt(value) : BigInt(value);
  const bin = big.toString(2).padStart(64, '0');

  return bin.match(/.{1,8}/g)?.join(' ') ?? bin;
}

export const Output = ({ result }: { result: number }) => {
  const isNegative = result < 0;

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Output</Text>

      <View style={styles.card}>
        <View style={styles.resultRow}>
          <Text style={styles.resultValue}>{result.toLocaleString()}</Text>
          {/* {isNegative && (
            <View style={styles.negativeBadge}>
              <Text style={styles.negativeBadgeText}>NEG</Text>
            </View>
          )} */}
        </View>

        <View style={styles.divider} />

        {/* HEX row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>HEX</Text>
          <Text style={styles.rowMono}>0x{toHex(result)}</Text>
        </View>

        {/* BIN row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>BIN</Text>
          <Text style={styles.rowMono} numberOfLines={2}>
            {toBin(result)}
          </Text>
        </View>

        {/* DEC unsigned row */}
        <View style={styles.row}>
          <Text style={styles.rowLabel}>U64</Text>
          <Text style={styles.rowMono}>
            {(result < 0
              ? BigInt(2) ** BigInt(64) + BigInt(result)
              : BigInt(result)
            ).toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 4,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
    paddingLeft: 4,
    color: '#7D8590',
  },
  card: {
    backgroundColor: '#161B22',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#30363D',
    padding: 16,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  resultValue: {
    color: '#E6EDF3',
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: 1,
  },
  negativeBadge: {
    backgroundColor: '#F7704F22',
    borderWidth: 1,
    borderColor: '#F7704F',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  negativeBadgeText: {
    color: '#F7704F',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#30363D',
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  rowLabel: {
    color: '#7D8590',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    width: 32,
  },
  rowMono: {
    color: '#64839b',
    fontSize: 13,
    flex: 1,
    flexWrap: 'wrap',
    letterSpacing: 0.5,
  },
});
