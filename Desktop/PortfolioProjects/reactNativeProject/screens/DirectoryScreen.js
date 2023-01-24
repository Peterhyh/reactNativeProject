import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({ item: photograph }) => {
        return (
            <ListItem onPress={() => props.onPress(photograph.id)}>
                <Avatar source={photograph.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{photograph.name}</ListItem.Title>
                    <ListItem.Subtitle>{photograph.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={props.photographs} //Array from MainComponent MUST BE AN ARRAY
            renderItem={renderDirectoryItem} //Needs to be a function
            keyExtractor={(item) => item.id.toString()}//returning an id of each campsite as a string //Needs to be an arrow function should return a unique value that FlatList will use to add a key to each item on the list
        />
    )
};

export default DirectoryScreen;