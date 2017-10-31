/**
 * Created by 王石磊 on 2017/10/24.
 */
/**
 * Created by 王石磊 on 2017/10/24.
 */
import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, View, Image, Button, StyleSheet, ListView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

export default class myCoin extends React.Component {
    static navigationOptions = {
        title: 'myCoin',
        headerTitleStyle: { alignSelf: 'center' },
        headerMode:"float",
    };

    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <Text>myCoin</Text>
            </View>
        );
    }

}

var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ListItem: {
        height: 85,
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8'
    },
    itemCell: {
        flex: 1
    },
    itemCell3: {
        flex: 3
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 10,
        resizeMode: 'cover',
        borderWidth: 1
    },
    text: {
        marginTop: 20,
        fontSize: 14
    },
    state: {
        color: '#fb7299',
        marginRight: 20
    },
    text2: {
        marginTop: 5,
        fontSize: 12
    },

    btnRow: {
        marginBottom: 40,
        flexDirection: 'row'
    },
    btn:{
        flex:1
    },
    btnSelect:{
        flex:1,
        width:130,
        height:42,
        backgroundColor:'#80bffe',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnSelectText:{
        color: '#fff',
        fontSize: 17,
    },
    btnNext:{
        flex:1,
        width:130,
        height:42,
        backgroundColor:'#e8e8e8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnNextText:{
        color: '#7e7e7e',
        fontSize: 17,
    }
});
