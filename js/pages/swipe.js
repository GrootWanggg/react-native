/**
 * Created by 王石磊 on 2017/10/30.
 */
import React from 'react'
import {
    Text,
    View,
    Image,
    DeviceEventEmitter
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:"red"
    },
    textIndex: {
        color: '#484848',
        fontSize: 15,
        fontWeight: 'normal',
        position: "absolute",
        bottom: 20,
    },
    headerImg:{
        flex:1
    }
}
var SwipeContent = [
    "Hello Swiper1", "Beautiful2", "And simple3"
]

export default () =>
    <View style={{height:500}}>
        <Swiper
            style={styles.wrapper}
            showsButtons
            showsPagination={false}
            prevButton={<Text style={{fontSize: 60, color: '#00a7ec', paddingTop: 30, paddingBottom: 30}}>‹</Text>}
            nextButton={<Text style={{fontSize: 60, color: '#00a7ec', paddingTop: 30, paddingBottom: 30}}>›</Text>}
        >
            {
                SwipeContent.map((content, index) => {
                    return (
                        <View style={styles.slide1} key={index}>
                            <View style={{height:400,backgroundColor:"#f89",width:300,flexDirection:"column"}}>
                                <View style={{flex:3}}>
                                    <Image
                                        style={styles.headerImg}
                                        source={require('./../../assets/other/testImage.png')}
                                    />
                                </View>
                                <View style={{flex:1,flexDirection:"row"}}>
                                    <View style={{flex:2,backgroundColor:"#ff8",alignItems:"center",justifyContent:"center"}}>
                                        <Text>王石磊1号</Text>
                                        <Text>30/次</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}} >
                                        <View style={{height:20,width:80,backgroundColor:"#ff8",alignItems:"center",justifyContent:"center",borderRadius:5}}>
                                            <Text>可抓取</Text>
                                        </View>

                                    </View>
                                    {/*<Text style={styles.text}>{content}</Text>*/}
                                </View>

                            </View>

                            <Text style={styles.textIndex}>{index + 1 + "/" + SwipeContent.length}</Text>
                        </View>
                    )
                })
            }


        </Swiper>
    </View>