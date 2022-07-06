import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Crafter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}> Bio Assembler </Text>
            <Text style={styles.blockText}>
                Many biological molecules consist of multiple proteins. Here you can combine proteins to make larger molecules.
            </Text>
            <TouchableOpacity
                style={styles.adderButton}
            >
                <Text style={{fontWeight: 'bold', fontSize: 36, color: '#FFFFFF'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.adderButton}
            >
                <Text style={{fontWeight: 'bold', fontSize: 36, color: '#FFFFFF'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.adderButton}
            >
                <Text style={{fontWeight: 'bold', fontSize: 36, color: '#FFFFFF'}}>+</Text>
            </TouchableOpacity>



            <TouchableOpacity
                style={styles.submissionButton}
            >
                <Text style={styles.submissionText}>Synthesize</Text>
            </TouchableOpacity>
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
        textAlign: 'center',
        marginBottom: 30
    },
    adderButton: {
        backgroundColor: "#f9b06b",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: "50%",
        alignItems: 'center'
    },
    submissionButton: {
        backgroundColor: "#07659b",
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    submissionText: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#FFFFFF'
    }
});
export default Crafter;