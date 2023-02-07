import * as React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#252526' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>PROTOTYPE</Text>
        </View>
    );
};

export default HomeScreen;