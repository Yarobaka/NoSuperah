import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, ActivityIndicator } from "react-native"
import { Colors } from "../../constants/colors";

export const HomeScreen = ({navigation, route}) => {

  // this page was created for testing purpose, so the scope will be change in future features
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])
  
  return(
    <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.PrimaryColor }}>
      
      { 
        isLoading
          ?  
            <ActivityIndicator size={80} color={Colors.SecondaryColor}/>
          : 
            <TouchableOpacity
              activeOpacity={0.5}>
              <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
              />
              <View />
              <Text
                style={{color: Colors.TextColor}}
              >
                Hello {route.params.name}
              </Text>
            </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});