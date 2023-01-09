import { TextInput } from 'react-native';

import { Colors } from '../../constants/colors';

export const MyTextInput = (props) => {

  return (
    <>
      <TextInput 
        {...props}
        width='100%'
        
        placeholderTextColor={Colors.TextColor}
        inlineImagePadding={30}        
        cursorColor={Colors.TextColor}
        onPressIn={()=> console.log('pressed')}
        style={{
          marginBottom: '5%',
          paddingHorizontal: 15,
          paddingVertical: '4%',
          borderWidth: 0.2,
          elevation: 10,
          shadowRadius: 10,
          borderRadius: 23,
          color: Colors.TextColor,
        }}
      />
    </>
  )
}