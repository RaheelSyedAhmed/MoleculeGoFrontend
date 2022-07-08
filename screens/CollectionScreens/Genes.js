
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import base from '../../data/base.json';
import Gene from '../../subcomponents/Gene.js';

const Genes = () => {
    const geneEMIs = base.filter( (emi) => emi.emi_class.includes("blueprint"))
    
    return (
        <View style={styles.container}>
            <View style={styles.title}> 
                <Text style={styles.headerText}> Genes </Text>
            </View>
            
            <SafeAreaView style={styles.sav}>
                <ScrollView>
                    { produceViews(geneEMIs) }
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}


function produceViews(EMIs){
    return EMIs.map((element) => {
        return (
            <Gene key={element.pk} element={element}></Gene>
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
    title: {
        alignItems: 'center',
        justifyContent:'center',
        width: "100%",
        margin: 5, 
        flex: 1
    },
    sav: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 4,
        width: "90%"
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36
    }
});

export default Genes;