// feedback
import { Alert, ToastAndroid } from 'react-native';

import Storage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

export function showToast(testo) {
    setTimeout(() => {
        ToastAndroid.show(testo, ToastAndroid.SHORT)
    }, 300);
}

export async function addData(x, id, idefntifier, tipo) {

    try {
        if (idefntifier) {

            const item = JSON.stringify({
                tipo: tipo,
                data: `${x}`,
                id: id
            }).trim();

            await Storage.setItem(idefntifier, item);

            showToast("aggiunto con successo");


        } else {
            const ID = uuid.v4();
            const item = JSON.stringify({
                tipo: tipo,
                data: `${x}`,
                id: id
            }).trim()

            await Storage.setItem(ID, item);
            showToast("aggiunto con successo")
        }
    } catch (err) {
        Alert.alert("ERRORE", "si è verificato un errore");
    }


}

export async function removeText(identifier) {
    try {
        await Storage.removeItem(identifier);

        showToast("rimosso con successo")
    } catch (err) {
        Alert.alert("ERRORE", "si è verificato un errore");
    }
}

export async function getItems() {
    let tmp;
    // await Storage.clear();
    try {
        let keys = await Storage.getAllKeys();

        let lista = await Storage.multiGet(keys);
        tmp = [...lista];
    } catch (err) {
        Alert.alert("ERRORE", "si è verificato un errore");
    }

    return tmp;
};