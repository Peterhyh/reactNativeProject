import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderPhotograph = ({ photograph }) => {
    if (photograph) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={photograph.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {photograph.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{photograph.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderPhotograph;