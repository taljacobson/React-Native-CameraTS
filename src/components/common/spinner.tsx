import React from 'react';
import { View, ActivityIndicator, ActivityIndicatorProperties } from 'react-native';

interface ISpinner extends ActivityIndicatorProperties {

}

export const Spinner = ({ size }:ISpinner) => (
        <View style={styles.spinnerStyle} >
            <ActivityIndicator size={size || 'large'} />
        </View>
    );


const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } as React.ViewStyle
};
