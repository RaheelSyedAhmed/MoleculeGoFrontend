import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Title = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.image_container}>
            <Image
                style={styles.molecule_pic}
                source={require('../assets/MoleculeGo_Layers.png')}
            />
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity
                    style={styles.go_button}
                    onPress={() =>
                        navigation.navigate('Home')
                    }
            >
                <Text style={{fontSize: 30, color: "white", alignContent: 'center', justifyContent: 'center'}}>GO!</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4727a6',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    image_container: {
        width: '100%',
        height: '50%'
    },
    button_container: {
        width: '50%',
        height: '25%'
    },
    molecule_pic: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    go_button: {
        backgroundColor: '#415FAB',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center'
    }
  });



export default Title;