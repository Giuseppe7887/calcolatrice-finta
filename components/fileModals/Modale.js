import { View, Image, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Ionicons } from '@expo/vector-icons';

// utils
import { getItems, removeText } from '../../utils/utils';

// redux
import { update } from '../../features/listaAsync';
import { useDispatch } from 'react-redux';


function Modale(context) {
    const src = JSON.parse(context.route.params.item[1])['data'];
    const idefntifier = context.route.params.item[0];
    const setToListaAsync = useDispatch();

    return (
        <>
            <View style={stiles.main}>
                <Image style={stiles.image} source={{ uri: src }} />
                <Pressable onPress={async() => {
                    removeText(idefntifier);
                    setToListaAsync(update(await getItems()))
                    context.navigation.navigate("calcolatrice")
                }}
                    style={{ backgroundColor: "red", width: "100%", height: "5%", justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="trash" size={20} color="white" />
                </Pressable>
            </View>
            <StatusBar backgroundColor='transparent' />
        </>
    )
};

const stiles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "95%",
        objectFit: "contain"
    }
})

export default Modale;