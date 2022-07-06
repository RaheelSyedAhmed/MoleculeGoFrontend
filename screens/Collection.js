import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Genes from './CollectionScreens/Genes.js';
import Pathways from './CollectionScreens/Pathways.js';
import Profile from './CollectionScreens/Profile.js';
const Tab = createBottomTabNavigator();

const Collection = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Genes" 
                component={Genes} 
                options={
                    {headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="dna" size={24} color="black" />)}
                }
            />
            <Tab.Screen
                name="Pathways" 
                component={Pathways}
                options={
                    {headerShown: false, tabBarIcon: () => (<MaterialCommunityIcons name="molecule" size={24} color="black" />)}
                } 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={
                    {headerShown: false, tabBarIcon: () => (<Ionicons name="person" size={24} color="black" />)}
                }
            />
        </Tab.Navigator>
    );
}

export default Collection;