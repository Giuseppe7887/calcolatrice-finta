import { View, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";


// UX
import { useState, useRef, useEffect } from "react";

import Topbar from "../Topbar";

export default function NewModal(context) {



    let keyboardRef = useRef();

    let [cache, setCache] = useState("")


    useEffect(() => {
        setTimeout(() => {
            keyboardRef.current && keyboardRef.current.focus();
        }, 100);
    })

    const { id } = context.route.params;

    const goHome = ()=> context.navigation.navigate("calcolatrice")

    return (
        <View style={{ flex: 1 }}>

            <Topbar
                goBack={()=>context.navigation.pop()}
                textFieldRef={keyboardRef}
                cache={cache}
                id={id}
                goHome={goHome}
                route={context.route.name}
            />

            <View style={stiles.body}>
                <TextInput
                    placeholder="Scrivi qui.."
                    ref={keyboardRef}
                    value={cache}
                    onChangeText={text => setCache(text)}
                    multiline
                    style={stiles.textInput}>
                </TextInput>
            </View>
            <StatusBar style={{ backgroundColor: "transparent" }} />
        </View>
    );
};

const stiles = StyleSheet.create({
    body: {
        backgroundColor: "#fbfbfb",
        width: "100%",
        height: '90%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    textInput: {
        width: "100%",
        height: "100%",
        textAlignVertical: "top",
        padding: 20,
        fontSize: 20
    }
})