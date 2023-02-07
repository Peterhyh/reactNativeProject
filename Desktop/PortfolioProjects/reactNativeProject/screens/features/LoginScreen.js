import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { CheckBox, Input, Button, Icon, } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';







const LoginTab = ({ navigation }) => {
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
            <View>
                <Button
                    onPress={() => navigation.navigate('Register')}
                    title='Register'
                    type='clear'
                    icon={
                        <Icon
                            name='user-plus'
                            type='font-awesome'
                            color='blue'
                        />
                    }
                    titleStyle={{ color: 'blue' }}
                />
            </View>
        </View>
    )
};

const RegisterTab = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const handleRegister = () => {
        const userInfo = {
            username,
            password,
            firstName,
            lastName,
            email,
            remember
        }
        console.log(JSON.stringify(userInfo))
        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({ username, password })
            ).catch((error) => console.log('Unable to save user info', error))
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) => console.log('unable to delete user info', error))
        }
    }

    return (
        <ScrollView >
            <View style={styles.registerContainer}>
                <Input
                    placeholder='Username'
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                />
                <Input
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                />
                <Input
                    placeholder='First Name'
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                />
                <Input
                    placeholder='Last Name'
                    onChangeText={(text) => setLastName(text)}
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                />
                <Input
                    placeholder='Email'
                    onChangeText={(text) => setEmail(text)}
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    value={email}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={remember}
                    onPress={() => setRemember(!remember)}
                />
                <View style={styles.registerContainer}>
                    <Button
                        onPress={() => handleRegister()}
                        title='Register'
                        icon={
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                            />
                        }
                    />
                </View>
            </View>
        </ScrollView>
    )
};

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Login'
                component={LoginTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Register'
                component={RegisterTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

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
    },
    registerContainer: {
        margin: 40,
        marginTop: 120
    }
})

export default LoginScreen;