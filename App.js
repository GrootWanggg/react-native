/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator, DrawerNavigator,DrawerItems } from 'react-navigation';
import { AppRegistry, Text, View, Button, StyleSheet, Image,Icon ,ScrollView,Platform} from 'react-native';
import LoginScreen from './js/pages/login';
import SildeScreen from './js/pages/slide';
//侧边栏跳转页面
import myCoinScreen from './js/pages/myCoin';//我的金币
import myDollScreen from './js/pages/myDoll';//我的娃娃
import myRecordScreen from './js/pages/myRecord';//使用记录
import swipeScreen from './js/pages/swipe';//轮播
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



//sider router
const NavApp = DrawerNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
            head:null,
        }
    },
},{
    head:null,
    headerMode:"none",
    contentOptions: {
        initialRouteName: 'Home', // 默认页面组件
        activeItemKey : 'Notifications',
        labelStyle : {//标签样式
            // color : 'red',
            height : 20,
        },
        activeTintColor: '#666',  // 选中文字颜色
        activeBackgroundColor: '#fff', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
            display:null,
        },
        //没有作用
        onItemPress : (route) => {
            console.log('-------->' + JSON.stringify(route))
        },

    },
    drawerWidth:242,
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: props => {
        console.log('contentComponent');
        console.log(props);
        return (
                <View>
                    <SildeScreen {...props} />
                </View>
        )
    },
});
const NavAppStackNavigator = StackNavigator({
    // Login: {
    //     screen: LoginScreen,
    //     navigationOptions: {
    //         // header: null,
    //         headerMode:"none"
    //     }
    // },//默认首页
    NavApp:{
        screen: NavApp,
        navigationOptions:{
            header: null,
        }
    },
    MyRecord: {
        screen: myRecordScreen,
    },
    MyCoin: {
        screen: myCoinScreen,
    },
    MyDoll: {
        screen: myDollScreen
    },
    Swipe: {
        screen: swipeScreen,
        navigationOptions:{
            header: null,
        }
    },


},{
        transitionConfig:()=>({
            screenInterpolator:CardStackStyleInterpolator.forHorizontal,
        })
});
export default class App extends React.Component {
    componentDidMount() {
        // 处理数据源
        // this.props.navigation.setParams({ navigatePress: this.clickFinishButton })
    }
    clickFinishButton = () => {
        this.props.navigation.navigate('MyDoll');
    }
    render() {

        return <NavAppStackNavigator />;
    }
}
const styles = StyleSheet.create({
    headerImg: {
        width:61.5,
        height:61.5,
        resizeMode: 'cover',
        borderRadius:60,
    },
})