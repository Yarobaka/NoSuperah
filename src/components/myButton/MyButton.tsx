import { TouchableOpacity, Text, Image } from "react-native"

import { Colors } from "../../constants/colors";

export const MyButton = (props) => {

  return(
    <TouchableOpacity
      {...props}
    >
      {props?.hasImage 
        ? <Image
            source={require('../../../android/app/src/main/res/drawable/football.png')}
          />
        : null  
      }
      
      <Text

      // adicionst botao de next no teclado by Ricardo Rodrigues
        style={{
          color: Colors.TextColor,
          marginLeft: '5%',
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}