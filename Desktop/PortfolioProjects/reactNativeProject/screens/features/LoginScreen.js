import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckBox, Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        console.log('username:', username);
        console.log('password', password);
        console.log('remember', remember);

        if (remember) {
            SecureStore.setItemAsync('userinfo', JSON.stringify({ username, password })).catch((error) => console.log('Unable to save user info', error))
        }
        else {
            SecureStore.deleteItemAsync('userinfo').catch((error) => console.log('Unable to delete user info', error));
        }
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUsername(userinfo.username);
                setPassword(userinfo.password);
                setRemember(true);
            }
        });
    }, []);


    return (
        <View style={styles.container}>
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                onChangeText={(text) => setUsername(text)}
                value={username}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <CheckBox
                title='Remember Me'
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                containerStyle={styles.formCheckBox}
            />
            <View>
                <Button
                    onPress={() => handleLogin()}
                    title='login'
                    color='#1E1E1E'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
        marginTop: 100
    },
    formInput: {
        padding: 10
    },
    formIcon: {
        marginRight: 10
    },
    formCheckBox: {
        margin: 10,
        backgroundColor: null
    }
})

export default LoginScreen;