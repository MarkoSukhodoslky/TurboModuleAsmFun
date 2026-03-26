import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const Operands = ({ setV1, setV2, v1, v2 }: any) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionText}>Operands</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Text style={styles.value}>{v1}</Text>
          <Text style={styles.inputLable}>value1</Text>
          <Text style={styles.inputReg}>reg X0</Text>
          <View>
            <TouchableOpacity onPress={() => setV1(v1 + 1)}>
              <Text style={{ color: '#E6EDF3' }}>up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setV1(v1 - 1)}>
              <Text style={{ color: '#E6EDF3' }}>down</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.value}>{v2}</Text>
          <Text style={styles.inputLable}>value2</Text>
          <Text style={styles.inputReg}>reg X1</Text>
          <View>
            <TouchableOpacity onPress={() => setV2(v2 + 1)}>
              <Text style={{ color: '#E6EDF3' }}>up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setV2(v2 - 1)}>
              <Text style={{ color: '#E6EDF3' }}>down</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  inputsContainer: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  input: {
    flex: 1,
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#30363D',
    backgroundColor: '#0D1117',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  inputLable: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7D8590',
    position: 'absolute',
    left: 6,
    top: 4,
  },
  inputReg: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7D8590',
    position: 'absolute',
    right: 6,
    bottom: 4,
  },
  value: {
    fontSize: 32,
    color: '#E6EDF3',
    fontWeight: '700',
  },
});
