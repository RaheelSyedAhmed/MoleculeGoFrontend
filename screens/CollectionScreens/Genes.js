
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import base from '../../data/base.json';



const Genes = () => {
    const geneEMIs = base.filter( (emi) => emi.emi_class.includes("blueprint"))
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}> Genes </Text>
            {produceViews(geneEMIs)}
        </View>
    );
}


function produceViews(EMIs){
    return EMIs.map((element) => {
        return (
          <View><Text>{element.pk}</Text></View>
        )
    })
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
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 15
    }
});

export default Genes;