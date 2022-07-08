
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import base from '../../data/base.json';
import Molecule from '../../subcomponents/Molecule.js';

const Pathways = () => {
    const pathwayEMIs = base.filter( (emi) => (emi.emi_class.includes("protein") || emi.emi_class.includes("complex")))

    return (
        <View style={styles.container}>
            <View style={styles.title}> 
                <Text style={styles.headerText}> Proteins and Molecules </Text>
            </View>
            
            <SafeAreaView style={styles.sav}>
                <ScrollView>
                    { produceViews(pathwayEMIs) }
                </ScrollView>
            </SafeAreaView>
        </View>
        
    );
}

function produceViews(EMIs){
    return EMIs.map((element) => {
        return (
            <Molecule key={element.pk} element={element}></Molecule>
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

export default Pathways;