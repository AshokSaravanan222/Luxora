import {React} from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SIZES, FONT, COLORS } from '../../../../constants';
import { useRouter } from 'expo-router';

const Header = () => {
  const router = useRouter();
  return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => router.push('learn')}
      >
        <Text style={styles.text}>Back to ReadAI</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontFamily: FONT.bold,  // Replace this with the actual font family you're using
    fontSize: SIZES.medium, // Replace this with the actual size you're using
  },
});

export default Header;
