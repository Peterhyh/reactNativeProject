import * as React from 'react';
import { View, Text } from 'react-native';

const CameraScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#252526', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#FFF', fontSize: 26, fontWeight: 'bold' }}>CAMERA</Text>
        </View>
    )
};

export default CameraScreen;