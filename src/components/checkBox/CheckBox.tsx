import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from "../../constants/colors";

interface Option {
  id: number,
  name: string,
};

export const CustomCheckBox = ({options = [], selected, setSelected}) => {

  const toggle = (option: Option) => {
    setSelected(option);
  };

  const isChecked = (id: number) => (
    selected?.id === id
      ?
        <Icon name="check-bold" color={Colors.FourthyColor} size={20} />
      :
        null
  );

  return(
    <>
      <View>
        {
          options.map((option: Option, index) => (
            <View key={index} style={styles.optionContainer}>
              <TouchableOpacity 
                style={styles.touchable}
                onPress={() => toggle(option)}
              >
                {
                  isChecked(option.id)
                }
              </TouchableOpacity>
              
              <Text style={styles.optionText}>
                {option.name}
              </Text>
            </View>
          ))
        }
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  touchable: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.FourthyColor,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  optionText: {
    marginLeft: 12,
    fontSize: 15,
    color: Colors.TextColor
  }
})