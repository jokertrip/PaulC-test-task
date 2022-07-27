import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from "react-redux";
import AuthScreen from '../Screens/AuthScreen';
import FinalScreen from '../Screens/FinalScreen';

const MainNavigator = () => {
    const isLogged = useSelector(state => !!state.isLogged)

    return(
        <NavigationContainer>
            {!isLogged && <AuthScreen/>}
            {isLogged && <FinalScreen />}
        </NavigationContainer>
    )
}


export default MainNavigator
