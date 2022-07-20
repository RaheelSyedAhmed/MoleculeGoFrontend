import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Images from '../data/Images.js';

const Molecule = ( {element} ) => {
    const key_path = element.pk.replace('-', '')

    return(
        <TouchableOpacity key={element.pk} style={styles.button}>
            <Image
                source={Images.paths[key_path]}
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

export default Molecule;
