import { useContext } from 'react'
import HomeScreen from './HomeScreen'
import SplashScreen from './SplashScreen'
import AuthContext from '../auth'

export default function HomeWrapper() {
    const { auth } = useContext(AuthContext);
    console.log("HomeWrapper auth.loggedIn: " + auth.loggedIn);

    const email = auth.getUserEmail();
    
    if (auth.loggedIn)
        return <HomeScreen />
    else
        return <SplashScreen />
}