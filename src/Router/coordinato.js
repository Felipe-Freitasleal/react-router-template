

export const goToHomePage = (navigate) => {
    navigate('/')
}

export const gotToProfilePage = (navigate, nome) => {
    navigate(`/profile/${nome}`)
}

export const gotToLoginPage = (navigate, nome) => {
    navigate(`/login`)
}