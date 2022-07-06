
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}> Profile </Text>
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