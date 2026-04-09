import { useTheme } from "react-native-paper";
import { FlatList, View } from "react-native-web";
import ContatoItem from "./ContatoItem";

export default function TelaB() {
    const theme = useTheme();

    const contatos = [
        { id: "1", nome: "Alice", telefone: "11 99999-0001", avatar: "https://i.pravatar.cc/150?img=1"},
        { id: "2", nome: "Bruno", telefone: "11 99999-0002", avatar: "https://i.pravatar.cc/150?img=2"},
        { id: "3", nome: "Carla", telefone: "11 99999-0003", avatar: "https://i.pravatar.cc/150?img=3"},
        { id: "4", nome: "Diego", telefone: "11 99999-0004", avatar: "https://i.pravatar.cc/150?img=4"},
        { id: "5", nome: "Elisa", telefone: "11 99999-0005", avatar: "https://i.pravatar.cc/150?img=5"},
        { id: "6", nome: "Jonny", telefone: "11 99999-0006", avatar: "https://i.pravatar.cc/150?img=6"}
    ];

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <View style={styles.areaLista}>
                <FlatList
                data={contatos}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => (
                    <ContatoItem item={item} index={index} />
                )}
                contentContainerStyle={styles.lista}
                showsVerticalScrollIndicator={false}
                /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    topo:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 18,
        paddingBottom: 14,
        paddingHorizontal: 12
    },
    botaoTopo:{
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: "#1d5db3",
        borderRadius: 8
    },
    textBotaoTopo: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16
    },
    areaLista: {
        flex: 1,
        margin: 14,
        backgroundColor: "#F5F5F5",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    lista: {
        paddingBottom: 10
    }
})