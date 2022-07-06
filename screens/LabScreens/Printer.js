import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Printer = () => {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.blueprint}
            source={require('../../assets/blueprintB2.png')}
            />
            <Text style={styles.headerText}> Protein Printer </Text>
            <Text style={styles.blockText}>
                After discovering a gene with the NextGen Sequencer, you can create proteins from these genes! The protein printer turns amino acids into complete proteins.
            </Text>
            <Text style = {{fontSize:20, margin: 10}}> Choose a gene to craft a protein. </Text>
            <TouchableOpacity
                style={styles.submissionButton}
            >
                <Text style={styles.submissionText}>Choose a Gene</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submissionButton}
            >
                <Text style={styles.submissionText}>Check Amino Acids</Text>
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
        margin: 5,
        width: "75%",
        textAlign: 'center'
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
export default Printer;