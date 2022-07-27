import {StyleSheet, Text, View} from "react-native";


const FinalScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Everything is fine</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default FinalScreen
