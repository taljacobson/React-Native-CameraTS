import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Camera from 'react-native-camera';
import Button from 'react-native-button';

interface Props {

}

interface camera {
    aspect: any
    captureTarget: any;
    type: any
    flashMode: any;
    orientation: any
}

interface State {
    camera: camera;
    isRecording: boolean;
}

class CameraPreview extends Component<Props, State> {
    camera: Camera;
    constructor(props: Props) {
        super(props);

        this.camera = null;

        this.state = {
            camera: {
                aspect: Camera.constants.Aspect.fit,
                captureTarget: Camera.constants.CaptureTarget.cameraRoll,
                type: Camera.constants.Type.back,
                orientation: Camera.constants.Orientation.auto,
                flashMode: Camera.constants.FlashMode.auto,
            },
            isRecording: false
        };
    }

    takePicture() {
        if (this.camera) {
            this.camera.capture()
                .then((data) => console.log(data))
                .catch((err: any) => console.error(err));
        }
    }

    startRecording() {
        if (this.camera) {
            this.camera.capture({ mode: Camera.constants.CaptureMode.video })
                .then((data) => console.log(data))
                .catch((err: any) => console.error(err));
            this.setState({
                isRecording: true
            });
        }
    }

    stopRecording() {
        if (this.camera) {
            this.camera.stopCapture();
            this.setState({
                isRecording: false
            });
        }
    }

    switchType() {
        let newType;
        const { back, front } = Camera.constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                type: newType,
            },
        });
    }

    switchFlash() {
        let newFlashMode;
        const { auto, on, off } = Camera.constants.FlashMode;


        if (this.state.camera.flashMode === auto) {
            newFlashMode = on;
        } else if (this.state.camera.flashMode === on) {
            newFlashMode = off;
        } else if (this.state.camera.flashMode === off) {
            newFlashMode = auto;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                flashMode: newFlashMode,
            },
        });
    }

    render() {
        const { preview, overlay, topOverlay, bottomOverlay, buttonsSpace, captureButton, typeButton, flashButton } = styles;
        const { aspect, captureTarget, type, flashMode } = this.state.camera
        return (
            <View style={{ flex: 1 }}>
                <Camera
                    ref={(cam: any) => {
                        this.camera = cam;
                    }}
                    style={preview}
                    aspect={aspect}
                    captureTarget={captureTarget}
                    type={type}
                    flashMode={flashMode}
                    defaultTouchToFocus
                    mirrorImage={false}
                />
                <View style={[overlay, topOverlay]}>
                    <Button
                        style={typeButton}
                        onPress={this.switchType.bind(this)}
                    >
                        type
                    </Button>
                    <Button
                        style={flashButton}
                        onPress={this.switchFlash.bind(this)}
                    >
                        flash
                    </Button>
                </View>
                <View style={[overlay, bottomOverlay]}>
                    {
                        !this.state.isRecording
                        &&
                        <Button
                            style={captureButton}
                            onPress={this.takePicture.bind(this)}
                        >
                            pic
                        </Button>
                        ||
                        null
                    }
                    <View style={buttonsSpace} />
                    {
                        !this.state.isRecording
                        &&
                        <Button
                            style={captureButton}
                            onPress={this.startRecording.bind(this)}
                        >
                            record
                        </Button>
                        ||
                        <Button
                            style={captureButton}
                            onPress={this.stopRecording.bind(this)}
                        >
                            stop
                        </Button>
                    }
                </View>
            </View>
        )
    }
}

export default CameraPreview


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
    } as React.TextStyle,
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    } as React.ViewStyle,
    overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center',
    } as React.ViewStyle,
    topOverlay: {
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    } as React.ViewStyle,
    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    } as React.ViewStyle,
    captureButton: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 40,
    } as React.ViewStyle,
    typeButton: {
        padding: 5,
    } as React.ViewStyle,
    flashButton: {
        padding: 5,
    } as React.ViewStyle,
    buttonsSpace: {
        width: 10,
    } as React.ViewStyle
});
