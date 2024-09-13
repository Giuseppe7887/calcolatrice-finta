import { View, StyleSheet, Button, Image, Text, Pressable } from "react-native";

import { useState, useEffect } from 'react';

import { StatusBar } from "expo-status-bar";

// file logic
import * as ImagePicker from 'expo-image-picker';

// redux
import { update } from "../../features/listaAsync.js";
import { useDispatch } from "react-redux";


// functions
import { addData, getItems } from '../../utils/utils.js';


export default function Modale(context) {
    const [image, setImage] = useState(null);

    const { id,identifier } = context.route.params;


    const setToListaAsync = useDispatch();


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    async function addImage() {
        if (!image) return;
        addData(image, id,identifier, 'path');
        setToListaAsync(update(await getItems()));
        context.navigation.navigate("calcolatrice")
    }



    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={stiles.container}>
                <Pressable onPress={() => context.navigation.navigate("calcolatrice")} style={[stiles.btn, { backgroundColor: "rgba(250,0,0,0.9)", borderRightColor: !image ? "grey" : "transparent", borderRightWidth: !image ? 0.7 : 0 }]}>
                    <Text style={stiles.text}>ANNULLA</Text>
                </Pressable>
                <Pressable onPress={addImage} style={[stiles.btn, { backgroundColor: image ? "rgba(0,200,0,0.9)" : "rgba(180,180,180,0.9)" }]}>
                    <Text style={stiles.text}>SALVA</Text>
                </Pressable>
            </View>
            <View style={stiles.body}>
                {image && <Image source={{ uri: image }} style={stiles.image} />}
                <Button title={!image ? "Selezione immagine" : "Cambia"} onPress={pickImage} />
            </View>
            <StatusBar backgroundColor="transparent" />
        </View>
    );
};

const stiles = StyleSheet.create({
    body: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fbfbfb",
        height: "90%",
        width: "100%"
    },
    image: {
        borderColor: "rgba(100,100,100,0.5)",
        borderWidth: 1,
        width: "70%",
        height: "50%",
        objectFit: "contain",
        marginBottom: 30
    },
    container: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        flexDirection: "row"
    },
    btn: {
        width: "50%",
        height: "100%",
        justifyContent: "flex-end",
        paddingBottom: 12
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 2,
        marginTop: 10
    }

})