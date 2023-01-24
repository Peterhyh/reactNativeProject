import { useState } from 'react';
import { PHOTOGRAPHS } from '../shared/photographs';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native';
import PhotographInfoScreen from './PhotographInfoScreen';


const Main = () => {
    const [photographs, setImages] = useState(PHOTOGRAPHS);
    const [selectedPhotographId, setSelectedPhotographId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                photographs={photographs}
                onPress={(photographId) => setSelectedPhotographId(photographId)}
            />;
            <PhotographInfoScreen
                photograph={
                    photographs.filter(
                        (photograph) => photograph.id === selectedPhotographId
                    )[0]
                }
            />
        </View>
    )
};

export default Main; 