import { StyleSheet, Text, View, Image } from 'react-native';


const Sequencer = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.blueprint}
            source={require('../../assets/blueprintA2.png')}
            />
            <Text style={styles.headerText}> NextGen Sequencer </Text>
            <Text style={styles.blockText}>The NextGen Sequencer helps you discover protein genes of DNA sequences you found in the wild.</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7de1ff",
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent:'center'
    },
    blueprint: {
        width:"50%",
        height:"25%",
        resizeMode: 'contain'
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 15
    },
    blockText: {
        backgroundColor: "#FFFFFF",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
        width: "75%",
        textAlign: 'center'
    }
});

export default Sequencer;