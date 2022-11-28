//추가된 아이템 하나를 나타냄
//아이템 완료 여부 상태값 가짐
//완료 체크 이벤트, 삭제 이벤트 기능
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont().then();

const TodoListItem = ({textValue, id, checked}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.completeCircle} >
                <Icon name="circledowno" size={30} color="#3143e8" />
                </View>
            </TouchableOpacity>
            <Text style={[styles.text, styles.strikeText]}>{textValue}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    <Icon name="delete" size={30} color="#e33057" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex:1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 10,
        width: 100,
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;