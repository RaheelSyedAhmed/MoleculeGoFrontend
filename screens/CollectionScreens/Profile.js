
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import useATP from '../../hooks/useATP.js';

const Profile = () => {
    const ATPHook = useATP();
    
    return (
        <View style={styles.container}>
            <View style = {{margin: 15}}>
                <Text style={styles.headerText}> Profile </Text>
            </View>
            
            <View style={{display: 'flex', flexDirection: 'row', width: "100%", alignContent: 'center', justifyContent: 'center'}}>
                <Image 
                    source={require("../../assets/avatars/male.gif")}
                    style={{maxWidth: "40%", maxHeight: "40%"}}
                    resizeMode={"contain"}
                />
                <View>
                    <Text style={styles.headerText}> Student </Text>
                    <Text style={styles.subText}> Level 1/5 </Text>
                </View>
            </View>

            <View style = {styles.centralPanel}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image 
                        source={require("../../assets/atp.png")}
                        style={{width: 50, height: 50, paddingTop: 5}}
                        resizeMode={"contain"}
                    />
                    <Text style={styles.midText}> Available ATP: {ATPHook.ATP} </Text>
                </View>
                <View>
                    <Text
                        style={{
                            color: "black",
                            fontSize: 32,
                            fontWeight: "bold",
                            fontStyle: "italic",
                        }}
                    >
                        XP
                    </Text>
                </View>
            </View>
            
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
        fontSize: 36
    },
    midText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    subText: {
        textAlign: 'center',
        fontSize: 16
    },
    centralPanel: {
        width: "90%", 
        alignContent: 'center', 
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export default Profile;

/*
<Text> {ATPHook.ATP} </Text>
            <TouchableOpacity onPress={() => ATPHook.setATP(ATPHook.ATP + 100)}>
                <Text> Click Me </Text>
            </TouchableOpacity>
*/