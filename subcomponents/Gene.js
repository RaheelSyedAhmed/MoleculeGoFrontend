import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Gene = ( {element} ) => {
    
    return(
        <TouchableOpacity key={element.pk} style={styles.button}>
            <Image
                source={require("../assets/molecule_images/BASE_dna.png")}
                style={{width: 50, height: 50, paddingTop: 5}}
                resizeMode={"contain"}
            />
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{element.display_name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 8,
        padding: 10,
        flexDirection: "row",
        backgroundColor: 'white',
        flexWrap: 'wrap'
    }
});

export default Gene;
