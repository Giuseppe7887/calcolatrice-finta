import { View, StyleSheet, Image, Text,TouchableOpacity } from 'react-native';


// icons
import { Ionicons } from "@expo/vector-icons";
import {  } from 'react-native-gesture-handler';


const img = require("../assets/splash.png");

export default function HoldingPage({auth}) {
    return (
        <View style={stiles.page}>
            {/* <Image
                style={stiles.img}
                source={img}
            /> */}
            <TouchableOpacity onPress={auth} style={stiles.fgBannder}>
                <Ionicons name="finger-print" size={50} color="black" />
                <Text style={{marginTop:30}}>Tocca per sbloccare con touchID</Text>
            </TouchableOpacity>
        </View>
    )
};

const stiles = StyleSheet.create({
    page: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 100,
        borderRadius: 100
    },
    fgBannder:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
});