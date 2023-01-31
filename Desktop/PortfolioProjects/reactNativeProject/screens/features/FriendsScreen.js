import * as React from 'react';
import { View, Text } from 'react-native';

export default function FriendsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#252526' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>Friends Screen</Text>
        </View>
    );
}