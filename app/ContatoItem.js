import { Image, StyleSheet, Text, View } from "react-native";

//Componente
export default function ContatoItem({item, index}){
    return(
        <View 
            style={[styles.card,
                {backgroundColor: index % 2 === 0 ? "#DDEEF2" : "#F3DDE7"}
            ]}
        >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
             <Text style={styles.nome}>{item.nome}</Text>
             <Text style={styles.telefone}>{item.telefone}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 12,
        marginVertical: 6,
        marginHorizontal: 12,
        alignItems: "center"
    }
})
