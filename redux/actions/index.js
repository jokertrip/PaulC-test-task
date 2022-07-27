
export const setData = (data) => ({
    type: 'SET_DATA',
    payload:{
        name: data.firstName,
        surname: data.surname,
        email: data.email,
        password: data.password,
    }
});

export const setIsLogged = () => ({
    type: 'SET_IS_LOGGED'
})
