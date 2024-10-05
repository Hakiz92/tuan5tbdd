import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const screen_02 = ({navigation}) => {
   
  return (
    <View style={{width: '100%'}}>
    <View style={{flexDirection: 'row'}} >
        <Image style={{height: 150, width: 150}} source={require('../assets/Data/vs_blue.png')}
        resizeMode='contain'
        >
        </Image>
        <Text style={{marginTop: 20}}>
            Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng
        </Text>
    </View>
        <View style={{backgroundColor: '#C4C4C4', width: '100%', height: '100%', marginTop: 5}}>
        <Text style={{marginLeft: 10, fontWeight: '300'}}>
          Chọn một màu bên dưới:
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', borderWidth: 1, width: 60, height: 60, margin: 'auto', backgroundColor: '#c5f1fb'}}
        onPress={() => navigation.navigate("screen_03")}>
          
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', borderWidth: 1, width: 60, height: 60, margin: 'auto', backgroundColor: '#f30d0d'}}
        onPress={() => navigation.navigate("screen_03")}>
          
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', borderWidth: 1, width: 60, height: 60, margin: 'auto', backgroundColor: '#000000'}}
        onPress={() => navigation.navigate("screen_03")} >
          
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', borderWidth: 1, width: 60, height: 60, margin: 'auto', backgroundColor: '#234896'}}
        onPress={() => navigation.navigate("screen_03")}>

        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center',backgroundColor: '#4d6dc1'}}>
            <Text style={{flexDirection: 'row', justifyContent: 'center', alignItem: 'center', borderWidth: 1, borderRadius: 15,paddingVertical: 15, paddingHorizontal: 170, color: 'white'}}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default screen_02

const styles = StyleSheet.create({})