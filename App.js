import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>YouPearCare</Text>
      <Image
          source={require("../my-pear/assets/pear.png")}
          style={styles.url_image}
      />
      <Text style={styles.copyright}>&copy; Infra Solution Team.</Text>
      <StatusBar style="light" />
      {/*<Image source={require("../my-pear/assets/dog.jpg")} style={styles.local_img}/>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#449171',
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative",
  },
  text:{
    color: '#ffffff',
    fontSize: 40,
    fontWeight:'bold',
    marginTop:180,
  },
  local_img:{
    width:320,
    height:240,
  },
  url_image:{
    width:320,
    height:260,
    marginBottom:100
  },
  copyright:{
    color:'#e8e8e8',
    marginTop:100,
  }
});
