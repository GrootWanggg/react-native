/**
 * Created by 王石磊 on 2017/10/25.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Alert,
    DeviceEventEmitter,
    TouchableOpacity,
    TouchableHighlight,

} from 'react-native'

/**
 * 自定义导航
 **/
export default class SidebarView extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('userNameDidChange',(userName) =>{
            alert('通知');
        })
    }
    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }
    render() {
        return (
            <View style={{flexDirection:"column"}} >
                <View style={{paddingTop: 105, paddingHorizontal: 15, backgroundColor:'#fb7299',alignItems:"center",flex:4}}>
                    {/*<View style={{width:69,height:69,borderRadius:34.5,backgroundColor:"#000",alignItems:"center",justifyContent:"center"}}>*/}
                    {/*<View style={{width:63,height:63,borderRadius:31.5,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>*/}
                    {/*<Image*/}
                    {/*style={styles.headerImg}*/}
                    {/*source={require('./assets/other/zyzs.png')}*/}
                    {/*/>*/}
                    {/*</View>*/}
                    {/*</View>*/}
                    {/*<Text style={{color:'#484848',fontSize:16,}}>王石磊</Text>*/}
                </View>
                <View style={{paddingTop: 20, paddingHorizontal: 15, backgroundColor:'#fff',alignItems:"center",flex:1}}>
                    <Text  style={{fontSize:16,color:"#484848",fontWeight:"700"}}>王石磊</Text>
                </View>

                <View  style={{width:69,height:69,borderRadius:34.5,backgroundColor:"#fb7299",alignItems:"center",justifyContent:"center",position:"absolute",top:55,left:86.5}}>
                    <View style={{width:63,height:63,borderRadius:31.5,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity  onPress={()=>{
                            this.props.navigation.navigate("MyDoll")
                        }}>
                        <Image
                            style={styles.headerImg}
                            source={require('./../../assets/other/testImage.png')}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text  style={{fontSize:16,color:"#484848",fontWeight:"700",alignSelf:"center"}}>王石磊</Text>
                </View>
                {/*目录*/}
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("MyDoll")
                        }}
                    >
                        抽屉1111
                    </Text>
                </View>
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("MyRecord",{
                                callback: (data)=>{
                                    alert(data); // 打印值为：'回调参数'
                                }
                            })
                        }}
                    >
                        myRecord
                    </Text>
                </View>
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("MyRecord")
                        }}
                    >
                        抽屉3333
                    </Text>
                </View>
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("MyDoll")
                        }}
                    >
                        抽屉4444
                    </Text>
                </View>
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("MyDoll")
                        }}
                    >
                        抽屉5555
                    </Text>
                </View>
                <View style={[styles.header,styles.headImageView]}>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate("Swipe")
                        }}
                    >
                        轮播
                    </Text>
                </View>
            </View>
        )
    }

};

let heightItem = 50
let heightHead = 200
let styles = StyleSheet.create({

    textItem: {
        fontSize: 16,
        fontFamily: 'PingFang SC',
        color: '#333333'
    },

    header: {
        height:50,
        width: '100%',
        paddingTop: 20,
        // backgroundColor:"pink"
    },
    headImageView: {
        // marginTop: 30,
        // marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPic: {
        width: 60,
        height: 60,
        //borderWidth:5,
        borderRadius: 30,
        borderColor: "#000",
    },
    headText: {
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "#ef3845",
        fontFamily: "PingFang SC",
    },
    userIphone: {
        color: "#333333",
        fontSize: 18,
        fontFamily: "PingFang SC",
    },
    headerImg: {
        width:61.5,
        height:61.5,
        resizeMode: 'cover',
        borderRadius:60,
    },
});
