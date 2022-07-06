
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import useATP from '../../hooks/useATP.js';

const Profile = () => {
    const ATPHook = useATP();
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}> Profile </Text>
            <Text> {ATPHook.ATP} </Text>
            <TouchableOpacity onPress={() => ATPHook.setATP(ATPHook.ATP + 100)}>
                <Text> Click Me </Text>
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
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 36,
        margin: 15
    }
});

export default Profile;