import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet .create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: Colors.PrimaryColor,
  },
  titleContainer: {
    flex: 1,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
});