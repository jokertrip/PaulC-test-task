import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from "react-hook-form";
import {setData} from "../redux/actions";


const AuthScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalErrors, setModalErrors] = useState([])
    const { handleSubmit, control } = useForm();
    const [focus, setFocus] = useState({nameFocus: false, surnameFocus: false, emailFocus: false, passwordFocus: false})
    const dispatch = useDispatch()


    const validateEmail = (email) => {
        const regexp =  /^([^ ])+\@([^ ])+\.([a-z]{2,})$/
        return regexp.test(email);
    }

    const validatePassword = (password) => {
        const regexp = /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/
        return regexp.test(password);
    }

    const checkForErrors = (data) => {
        let errors = []

        if(!data.firstName || data.firstName.length < 2 || data.firstName.length > 14){
            errors.push('First name')
        }
        if(!data.surname || data.surname.length < 2){
            errors.push('Surname')
        }
        if(!data.email || !validateEmail(data.email)){
            errors.push('Email')
        }
        if(!data.password || !validatePassword(data.password)){
            errors.push('Password')
        }

        return errors
    }

    const onSubmit = data => {
        const validationErrors = checkForErrors(data)
        console.log(validationErrors)
        if (validationErrors.length > 0){
            setModalVisible(true)
            setModalErrors(validationErrors)
        }else {
            dispatch(setData(data))
        }
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {modalErrors && modalErrors.map(error => <Text style={styles.modalText}>{error}</Text>)}
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.label}>First name</Text>
            <Controller
                control={control}
                render={({field: { onChange, value }}) => (
                    <TextInput
                        style={[styles.input, focus.nameFocus ? { borderColor : 'green'}:{borderColor: 'black'}]}
                        onFocus = {() => setFocus({...focus, nameFocus: true})}
                        onBlur = {() => setFocus({...focus, nameFocus: false})}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
            />

            <Text style={styles.label}>Surname</Text>
            <Controller
                control={control}
                render={({field: { onChange, value }}) => (
                    <TextInput
                        style={[styles.input, focus.surnameFocus ? { borderColor : 'green'}:{borderColor: 'black'}]}
                        onFocus = {() => setFocus({...focus, surnameFocus: true})}
                        onBlur = {() => setFocus({...focus, surnameFocus: false})}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="surname"
            />

            <Text style={styles.label}>Email</Text>
            <Controller
                control={control}
                render={({field: { onChange, value }}) => (
                    <TextInput
                        style={[styles.input, focus.emailFocus ? { borderColor : 'green'}:{borderColor: 'black'}]}
                        onFocus = {() => setFocus({...focus, emailFocus: true})}
                        onBlur = {() => setFocus({...focus, emailFocus: false})}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="email"
            />

            <Text style={styles.label}>Password</Text>
            <Controller
                control={control}
                render={({field: { onChange, value }}) => (
                    <TextInput
                        style={[styles.input, focus.passwordFocus ? { borderColor : 'green'}:{borderColor: 'black'}]}
                        onFocus = {() => setFocus({...focus, passwordFocus: true})}
                        onBlur = {() => setFocus({...focus, passwordFocus: false})}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="password"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        padding: 8,
        backgroundColor: '#71addb',
    },
    label: {
        color: 'white',
        margin: 20,
        marginLeft: 0,
    },
    input: {
        borderRadius: 4,
        borderWidth: 2,
        height: 32,
        fontSize: 20,
        backgroundColor: 'white'
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#c93c20',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#2196F3",
    },
})

export default AuthScreen
