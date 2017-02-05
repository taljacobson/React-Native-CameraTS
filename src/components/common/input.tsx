import React from 'react';
import { TextInput, Text, View } from 'react-native';

interface IInput extends React.Props<any>{
    label:string;
    value: string, 
    onChangeText: ()=>any, 
    placeholder:string, 
    secureTextEntry?:boolean
}

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }:IInput) => {
    const { containerStyles, InputStyle, labelStyle } = styles;
    return (
    <View style={containerStyles} >
        <Text style={labelStyle} >{label} </Text>
        <TextInput 
            style={InputStyle}
            value={value}
            onChangeText={onChangeText}
            autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
        </View>
    );
};


const styles = {
    containerStyles: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center'
    } as React.ViewStyle,
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    } as React.ViewStyle,
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    } as React.ViewStyle
};
