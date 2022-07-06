import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Map from './Map.js';
import Lab from './Laboratory.js';
import Collection from './Collection.js';
import { Entypo, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Map" 
                component={Map} 
                options={
                    {headerShown: false, tabBarIcon: () => (<Entypo name="compass" size={24} color="black" />)}
                }
            />
            <Tab.Screen
                name="Lab" 
                component={Lab}
                options={
                    {headerShown: false, tabBarIcon: () => (<Entypo name="lab-flask" size={24} color="black" />)}
                } 
            />
            <Tab.Screen 
                name="Collection" 
                component={Collection} 
                options={
                    {headerShown: false, tabBarIcon: () => (<MaterialIcons name="collections" size={24} color="black" />)}
                }
            />
        </Tab.Navigator>
    );
}

export default Home;