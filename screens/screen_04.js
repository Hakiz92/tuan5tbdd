import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import Icon, { Button } from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native'

const screen_04 = ({ navigation }) => {
    const [rating, setRating]= useState(5); //Luu so sao dc chon


     return (
        <View
        style={{flex:1}}
        >
            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}
            >
                <Image source={require('../assets/Data/vs_red.png')}
                    style={{height:300}} resizeMode='contain'
                />
            </View>
        <View>
            <Text 
            style={{fontSize: 18, fontWeight: '500', marginLeft: 20}}
            >
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10, marginLeft: 15 }}>
        {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name={star <= rating ? 'star' : 'star-o'} // Hiển thị star đầy hoặc rỗng
          size={20} // Kích thước ngôi sao
          color="#FFD700" // Màu vàng
          style={{ marginHorizontal: 5 }} // Khoảng cách giữa các ngôi sao
        />
    ))}
        <Text style={{flexDirection: 'row', justifyContent: 'center', marginLeft: 20, fontSize: 15}}>
            (Xem 828 đánh giá)
        </Text>
        </View>
        <View>
        <Text style={{flexDirection: 'row', justifyContent: 'center',  fontSize: 20, fontWeight: '700', marginLeft: 20, marginTop: 5}}>
            1.790.000 đ
        <Text style={{flexDirection: 'row', justifyContent: 'center', fontSize: 20, fontWeight: '200', marginLeft: 40, marginTop: 5, textDecorationLine: 'line-through'}}>
            1.790.000 đ
        </Text>
        </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flexDirection: 'row', justifyContent: 'center', color: '#fa1818', marginVertical: 10, marginLeft: 20, fontWeight: 700}}>
                Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            
            <Image source={require=('../assets/Data/help_icon.png')}
                style={{height:20, width: 20, marginLeft: 5}}
            />
        </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',paddingVertical: 5, paddingHorizontal: 80, borderRadius: 15, alignItems: 'center', borderWidth: 1, padding: 120}}
                 onPress={() => navigation.navigate("screen_02")}
                >
                <Text style={{marginRight: 50}}>
                        4 MÀU-CHỌN MÀU
                    </Text>
                        <Icon style={{alignSelf: 'right'}} name="chevron-right" size={10} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 110}}>
                <TouchableOpacity style={{backgroundColor: '#ee0a0a', flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderRadius: 15,paddingVertical: 10, paddingHorizontal: 140}}>
                    <Text style={{fontWeight: 'bold'}}>
                        CHỌN MUA
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

     )
}
export default screen_04