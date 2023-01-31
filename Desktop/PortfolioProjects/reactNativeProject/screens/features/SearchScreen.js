import * as React from 'react';
import { View, Text } from 'react-native';


const SearchScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#252526' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#FFF' }}>Search screen!</Text>
        </View>
    )
};

export default SearchScreen;