import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

interface IButton extends React.Props<any> {
    onPress: () => any;
}

export const Button = ({ onPress , children }:IButton) => {
   const { buttonStyle, textStyle } = styles;
   return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} >
        <Text style={textStyle} >
            {children}
        </Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        position: 'relative'
    } as React.ViewStyle,
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10
    } as React.ViewStyle
});
