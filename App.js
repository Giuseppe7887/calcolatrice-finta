// navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

// main
import Calcolatrice from './Calcolatrice.js';

// router
import Router from './components/router.js';

// textModals
import Modale from './components/textModals/Modale';
import NewModale from './components/textModals/NewModal';


// filesModals
import NewFileModal from './components/fileModals/NewModal.js';
import FileModal from './components/fileModals/Modale.js';

// REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// UX
import {useEffect} from 'react';
import * as splashScreen from 'expo-splash-screen';

// reducer
import listaAsync from './features/listaAsync.js';

const store = configureStore({
    reducer:{
        listaAsync
    }
})

const Stack = createStackNavigator();

function App() {

    splashScreen.preventAutoHideAsync();

    useEffect(() => {
        setTimeout(() => {
            splashScreen.hideAsync()
        }, 1200);
    }, [])
    

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="calcolatrice"
                        component={Calcolatrice} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="router"
                        component={Router} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="modal"
                        component={Modale} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="newModal"
                        component={NewModale} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="newFileModal"
                        component={NewFileModal} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="fileModal"
                        component={FileModal} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};

export default App;