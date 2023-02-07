import * as React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useState } from 'react';
import { PICTURES } from '../../shared/pictures';
import { Card } from 'react-native-elements';

const DisplayItem = ({ item }) => {
    if (item) {
        return (
            <Card containerStyle={{ padding: 0, marginTop: 50, backgroundColor: '6A6E75', borderRadius: 10 }}>
                <Card.Image source={item.image} style={{ borderRadius: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 5 }}>
                        <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 20, opacity: 0.5, fontWeight: 'bold' }}>
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20, color: '#FFF' }}>
                    {item.description}
                </Text>
            </Card>
        )
    }
    return <View />;
};

const ProfileScreen = () => {

    const [pictures, setPictures] = useState(PICTURES);

    const firstPic = pictures.find((item) => item.id === 0);
    const secondPic = pictures.find((item) => item.id === 1);
    const thirdPic = pictures.find((item) => item.id === 2);
    const fourthPic = pictures.find((item) => item.id === 3);


    return (
        <ScrollView style={{ backgroundColor: '#252526' }}>
            <DisplayItem item={firstPic} />
            <DisplayItem item={secondPic} />
            <DisplayItem item={thirdPic} />
            <DisplayItem item={fourthPic} />
        </ScrollView>
    );
}

export default ProfileScreen;