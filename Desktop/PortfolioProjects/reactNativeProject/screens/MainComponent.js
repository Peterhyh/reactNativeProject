import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './features/HomeScreen';
import LoginScreen from './features/LoginScreen';
import ProfileScreen from './features/ProfileScreen';

import CameraScreen from './features/CameraScreen';

const Tab = createBottomTabNavigator();


function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home-outline' : 'home-outline';
                    }
                    else if (rn === 'Profile') {
                        iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
                    }
                    else if (rn === 'Camera') {
                        iconName = focused ? 'camera-outline' : 'camera-outline';
                    }
                    else if (rn === 'Login') {
                        iconName = focused ? 'log-in-outline' : 'log-in-outline';
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 100, backgroundColor: '#1E1E1E' }
            }}>

            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                name='Camera'
                component={CameraScreen}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
            />
            <Tab.Screen
                name='Login'
                component={LoginScreen}
            />
        </Tab.Navigator>
    );
}

export default MainContainer;