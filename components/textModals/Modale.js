import { View, StyleSheet, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";


// Topbar
import Topbar from "../Topbar.js";



export default function Modale(context) {

    // cache del modal
    let [cache, setCache] = useState("");

    let textFieldRef = useRef(null);
    const { item } = context.route.params;
    const identifier = item[0];
    const { data, id } = JSON.parse(item[1]);

    useEffect(() => {
        setCache(data);
    }, []);

    const goHome = () => context.navigation.navigate("calcolatrice")
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Topbar goBack={() => context.navigation.pop()} textFieldRef={textFieldRef} stiles={stiles} cache={cache} id={id} identifier={identifier} route={context.route.name} goHome={goHome} />
            <View style={stiles.body}>
                <TextInput
                    placeholder="Scrivi qui.."
                    ref={textFieldRef}
                    goHome={goHome}
                    style={stiles.input}
                    multiline
                    value={cache}
                    onChangeText={(text) => setCache(text)}
                ></TextInput>
            </View>
        </View>
    );
};

const stiles = StyleSheet.create({
    body: {
        backgroundColor: "#fbfbfb",
        height: "90%",
        width: "100%"
    },
    input: {
        width: "100%",
        height: "90%",
        padding: 20,
        textAlignVertical: "top",
        fontSize: 20
    }
})