import { addData, removeText } from "../utils/utils";
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialIcons, Feather } from "@expo/vector-icons";

// REDUX
import { update } from "../features/listaAsync";
import { useDispatch } from "react-redux";


// utils
import {getItems} from '../utils/utils.js';


function AppBar({goBack, textFieldRef,  cache, id, identifier,route,goHome }) {


    let setToListaAsync = useDispatch();

    const h = identifier ? "20%" : "15%";

    return (
        <View style={[stiles.topBanner, { height: h }]}>
            <View style={stiles.iconeWrapper}>
                <View style={stiles.backButtonWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                            textFieldRef.current.blur();
                            goBack()
                        }} style={stiles.iconButton}>
                        <MaterialIcons style={{ marginLeft: 20, marginBottom: 5 }} name="arrow-back" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={stiles.saveTrashWrapper}>
                    {
                        route === "modal" &&
                        <TouchableOpacity onPress={async () =>{
                            textFieldRef.current.blur();
                            removeText(identifier);
                            setToListaAsync(update(await getItems()))
                            goHome()
                        } }>
                            <Feather name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <MaterialIcons onPress={async() => {
                            textFieldRef.current.blur();
                            if (!cache.length) return;
                            addData(cache, id, identifier,"testo");
                            setToListaAsync(update(await getItems()))
                            goHome();

                        }} name="done" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const stiles = StyleSheet.create({
    topBanner: {
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    iconeWrapper: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    backButtonWrapper: {
        height: "100%",
        width: "75%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    saveTrashWrapper: {
        width: "25%",
        flexDirection: "row",
        justifyContent: "space-around"
    }
});


export default AppBar;