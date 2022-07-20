import MapView from 'react-native-maps';
import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import useLocation from '../hooks/useLocation.js';



const MapComponent = () => {
    const regionHook = useLocation();

    return (
        <MapView 
            style={styles.map}
            region={regionHook.region}
            zoomEnabled={false}
            scrollEnabled={false}
        />
    );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: "80%"
    }
});

export default MapComponent;
