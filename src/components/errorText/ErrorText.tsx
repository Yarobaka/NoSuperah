import { Text } from "react-native"

import { Colors } from "../../constants/colors"


export const ErrorText = ({errorMessage}) => {
  return (
    <Text 
      style={{ 
        fontSize: 10, 
        color: Colors.ErrorColor,
        textAlign: 'left',
        alignSelf: 'flex-start',
      }}>{errorMessage}
    </Text>
  )
}