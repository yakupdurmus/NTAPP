import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Contact from './Containers/Contact';
import Dashboard from './Containers/Dashboard';
import Help from './Containers/Help';
import Kkvk from './Containers/Kkvk';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Kkvk" component={Kkvk} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;