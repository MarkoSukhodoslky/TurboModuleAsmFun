import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const INSTRUCTIONS = [
  { label: 'ADD', symbol: '+', color: '#4F8EF7' },
  { label: 'SUB', symbol: '−', color: '#F7704F' },
  { label: 'MUL', symbol: '×', color: '#A04FF7' },
  { label: 'DIV', symbol: '÷', color: '#4FC9F7' },
  { label: 'AND', symbol: '&', color: '#4FF7A0' },
  { label: 'OR', symbol: '|', color: '#F7D24F' },
  { label: 'XOR', symbol: '^', color: '#F74FA0' },
  { label: 'SHL', symbol: '<<', color: '#F7A44F' },
  { label: 'SHR', symbol: '>>', color: '#7FF74F' },
];

export const InstructionsSection = ({ setOp, op }: any) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Instructions</Text>
      <View style={styles.buttonsContainer}>
        {INSTRUCTIONS.map(ins => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={ins.label}
            onPress={() => setOp(ins.label)}
            style={{
              ...styles.button,
              backgroundColor:
                op === ins.label ? ins.color : 'rgba(0,0,0,0.00)',
              borderColor: ins.color,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: op === ins.label ? '700' : '500',
                color: op === ins.label ? '#0D1117' : ins.color,
              }}
            >
              {ins.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
    paddingLeft: 4,
    color: '#7D8590',
  },
  buttonsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    flexDirection: 'row',
    marginTop: 12,
  },
  button: {
    borderRadius: 8,
    borderWidth: 2,
    width: 64,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
