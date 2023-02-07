import { View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import logo from '../../assets/images/wsigniture.png';
import { baseUrl } from '../../shared/baseUrl';
import { useState } from 'react';
import * as ImageManipulator from 'expo-image-manipulator';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = ({ navigation }) => {
    const [imageUrl, setImageUrl] = useState(baseUrl + 'images/wsigniture.png');

    const takeImage = async () => {
        const cameraPermission =
            await ImagePicker.requestCameraPermissionsAsync();

        if (cameraPermission.status === 'granted') {
            const capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1]
            });
            if (!capturedImage.cancelled) {
                console.log(capturedImage);
                processImage(capturedImage.uri);
            }
        }
    };

    const processImage = async (imgUri) => {
        const processedImage = await ImageManipulator.manipulateAsync(
            imgUri,
            [{ resize: { width: 400 } }],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        console.log(processedImage);
        setImageUrl(processedImage.uri);
        await MediaLibrary.saveToLibraryAsync(processedImage.uri);
    };


    return (
        <ScrollView style={{ backgroundColor: '#252526' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 500 }}>
                <Image
                    source={{ uri: imageUrl }}
                    loadingIndicatorSource={logo}
                />
                <Button title='Camera' onPress={takeImage} />
            </View>
        </ScrollView>
    )
};

export default CameraScreen;