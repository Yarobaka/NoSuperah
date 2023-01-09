import { Text, View } from 'react-native';

import { RegistrationForm } from '../../forms/RegistrationForm';

import { styles } from './RegistrationStyle';

import { Colors } from '../../constants/colors';

interface UserRegistration {
  name: string,
  email: string,
  club: string,
  password: string,
};

export const RegistrationScreen = ({ navigation }) => {

  const onSubmit = (values: UserRegistration) => {
    // on this navigate function I passed the name as params just for testing purposes
    navigation.navigate('Home', { name: values.name })
  }

  return(
    <View
      style={styles.mainContainer}
    >      
      <View
        style={styles.titleContainer}
      >
        <Text
          style={{
            fontSize: 20,
            color: Colors.TextColor
          }}
        >
          Criar Conta
        </Text>
      </View>

      <View
        style={styles.formContainer}
      >
        <RegistrationForm 
          handleSubmitRegistration={onSubmit} 
        />
      </View>
    </View>
  )
}