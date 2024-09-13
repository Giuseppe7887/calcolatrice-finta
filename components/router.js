import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

function Router(context) {

    const {id}= context.route.params;

    return (
        <View style={stiles.main}>
            <View style={stiles.iconBox}>
                <TouchableOpacity
                    onPress={() => context.navigation.navigate("newModal", { id: id})}
                    style={stiles.iconButton}>
                    <AntDesign name="filetext1" size={60} color="grey" />
                    <Text style={stiles.iconText}>Aggiungi testo</Text>
                </TouchableOpacity>
            </View>

            <View style={stiles.iconBox}>
                <TouchableOpacity
                    onPress={() => context.navigation.navigate("newFileModal", { id: id,})}
                    style={stiles.iconButton}>
                    <Entypo name="images" size={60} color="grey" />
                    <Text style={stiles.iconText}>Aggiungi immagine</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const stiles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    iconBox: {
        width: "60%",
        height: "30%",
    },
    iconText: {
        color: "grey",
        marginTop: 10,
        fontSize: 20
    },
    iconButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    },
})

export default Router; 