import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Button from 'react-native-button';
import { Header, Card, CardSection } from './common';
import CameraPreview from './cameraPreview';

interface Props {

}

interface State {
    showCamera: boolean
}


export default class App extends Component<Props, State> {
    state: State = {
        showCamera: false
    }

    showCamera() {
        if (this.state.showCamera) {
            return <CameraPreview />
        }
        return <Button onPress={() => this.setState({showCamera: true})}>show camera</Button>
    }

    render() {
        const { container, welcome, instructions} = styles;
        return (
            <View style={{ flex: 1 }}> 
                <Header headerText='the header' />
                                {this.showCamera()}
                <View style={container}>
                    <Card>
                        <CardSection>
                            <Text style={welcome}>
                                Welcome to React Native!s
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={instructions}>
                                To get started, edit index.android.js
                             </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={instructions}>
                                Shake or press menu button for dev menu
                            </Text>
                        </CardSection>
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.TextStyle
});
