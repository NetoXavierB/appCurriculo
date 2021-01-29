import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import image from './assets/avatar.jpg';
import Card from './components/Card/index'


const App = () => {

  function handleIcons(icon){
    switch(icon){
      case 'linkedin':
          Alert.alert("Meu linkedin",'https://linkedin.com/in/');
        break;
      case 'github':
          Alert.alert("Meu Github",'https://github.com');
        break;
      case 'facebook':
          Alert.alert("Meu Facebook",'https://facebook.com');
        break;
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.page}>
        <View style={styles.container_top}>
          <Image source={image} style={styles.image}/>
          <Text style={styles.name} >Pinguins rapai</Text>
          <Text style={styles.description} >Pinguins selvagens</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => handleIcons('github')}>
              <Icon name="github" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIcons('facebook')}>
              <Icon name="facebook" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => handleIcons('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>
        <Card title={"Experiências"}>
          <Text style={styles.card_content_text}>Nadou todo o oceano atlantico</Text>
          <Text style={styles.card_content_text}>Nadou todo o oceano pacifico</Text>
        </Card>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex:1
  },
  container_top:{
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    width:250,
    height:250,
    borderRadius: 125
  },
  name:{ 
    fontSize:25,
    fontWeight:'bold',
    marginTop:10
  },
  description:{ 
    color: '#939393',
    marginBottom:10
  },
  icons:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width:'50%'
  },
  card_content_text:{
      color:'#939393',
      marginBottom:5
  }
});

export default App;
