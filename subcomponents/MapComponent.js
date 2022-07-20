import MapView from 'react-native-maps';
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';


const MapComponent = () => {
    return (
        <MapView 
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
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
