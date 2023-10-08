import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main8 from './screens/Main8';
import Main12 from './screens/Main12';
import Main11 from './screens/Main11';
import Main9 from './screens/Main9';
import Main7 from './screens/Main7';

const Stack = createStackNavigator();

const App = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="Home" component={Main8} />
        //         <Stack.Screen name="Category" component={Main7} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <Main7 />
    );
};

export default App;
