import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sequencer from './LabScreens/Sequencer.js';
import Printer from './LabScreens/Printer.js';
import Crafter from './LabScreens/Crafter.js';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Lab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Sequencer" 
                component={Sequencer} 
                options={
                    {headerShown: false, tabBarIcon: () => (<FontAwesome5 name="dna" size={24} color="black" />)}
                }
            />
            <Tab.Screen
                name="Printer" 
                component={Printer}
                options={
                    {headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="printer-3d" size={24} color="black" />)}
                } 
            />
            <Tab.Screen 
                name="Crafter" 
                component={Crafter} 
                options={
                    {headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="vector-combine" size={24} color="black" />)}
                }
            />
        </Tab.Navigator>
    );
}

export default Lab;