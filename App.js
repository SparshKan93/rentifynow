import Detail from './Components/Detail';
import Srp from './Components/Srp';
import HomeLoggedIn from './Components/HomeLoggedIn';
import Location from './Components/Location';
import Education from './Components/Education';
import Onboarding from './Components/Onboarding';
import Signup from './Components/Signup';
import Test from './Components/Test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from './Components/Order';
import ApplyingPage from './Components/ApplyingPage';


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
          <Stack.Screen name='Order' component={Order} options={{ headerShown: false }} />
          <Stack.Screen name='ApplyingPage' component={ApplyingPage} options={{ headerShown: false }} />
          <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>

  );
}

