// ui
import { Modal, StyleSheet, View, Text, Button } from "react-native";
import { Dimensions } from "react-native";

// ux
import { useState, useEffect } from "react";

const dot = "\u25cf";
const width = Dimensions.get("window").width;


export default function WelcomeModal({ visible, closeModal }) {

    let [showX, setShowX] = useState(false);

    useEffect(() => {
        setTimeout(() => { setShowX(true) }, 1000);
    }, [])

    return (
        <Modal animationType="fade" transparent visible={visible}>
            <View style={stiles.body}>
                <Text style={{ color: "white", fontSize: 40 }}>Benvenuto</Text>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ color: "white", fontSize: 20,marginBottom:30,width:width/1.2,textAlign:"center" }}>Come usare l'app?</Text>
                    <Text style={{ color: "white", fontSize: 20,marginBottom:30,width:width/1.2,textAlign:"center" }}>{dot} CLICCA PER SCRIVERE</Text>
                    <Text style={{ color: "white", fontSize: 20,width:width / 1.2,width:width/1.2,textAlign:"center" }}>{dot} TIENI PREMUTO PER INSERIRE FOTO O IMMAGINI</Text>
                </View>
                <Button title="Ho capito!" onPress={closeModal} />
            </View>
        </Modal>
    )
};

const stiles = StyleSheet.create({

    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "space-around",
        alignItems: "center"
    },
    whiteText: {
        color: "white"
    }
});