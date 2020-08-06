import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#8257E5',
        padding: 30
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
});

export default styles;