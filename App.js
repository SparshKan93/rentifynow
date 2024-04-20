import Detail from './Components/Detail';
import Srp from './Components/Srp';
import HomeLoggedIn from './Components/HomeLoggedIn';
import Location from './Components/Location';
import Education from './Components/Education';
import Onboarding from './Components/Onboarding';
import Signup from './Components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name='HomeLoggedIn' component={HomeLoggedIn}  options={{ headerShown: false }}/>
          <Stack.Screen name='Detail' component={Detail}  options={{ headerShown: false }}/>
          <Stack.Screen name='Srp' component={Srp}  options={{ headerShown: false }}/>
          <Stack.Screen name='Education' component={Education}  options={{ headerShown: false }}/>
          <Stack.Screen name='Location' component={Location}  options={{ headerShown: false }}/>
          <Stack.Screen name='Onboarding' component={Onboarding}  options={{ headerShown: false }}/>
          <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>

  );
}

