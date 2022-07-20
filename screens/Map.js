import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import MapComponent from '../subcomponents/MapComponent';

function getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    },
  };
}


const Map = ({navigation}) => {
  return (
      <View style={styles.container}>
          <View style={styles.selector}>
            <TouchableOpacity
              style={styles.selectorButton}
            >
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FFFFFF'}}> Gene </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectorButton}
            >
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FFFFFF'}}> Amino Acid </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectorButton}
            >
              <Text style={{fontWeight: 'bold', fontSize: 12, color: '#FFFFFF'}}> Protein </Text>
            </TouchableOpacity>
          </View>
          <MapComponent></MapComponent>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    selector: {
      backgroundColor: '#91BFFF',
      width: Dimensions.get('window').width,
      height: "10%",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center'
    },
    map: {
      width: Dimensions.get('window').width,
      height: "80%"
    },
    selectorButton: {
      backgroundColor: "#f9b06b",
      borderRadius: 10,
      padding: 10,
      margin: 10,
      width: "25%",
      alignItems: 'center'
    }
});

export default Map;