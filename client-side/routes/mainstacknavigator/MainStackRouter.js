import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/registration/splashScreen';
import Detailscreen from '../../screens/detailed_item_screen/detailscreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MainStackRouter() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Splash'
    screenOptions={{
        headerShown:false,
        headerShadowVisible:false,
    }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="details_screen" component={Detailscreen} />
    </Stack.Navigator>
 </NavigationContainer>
  );
}

export default MainStackRouter;