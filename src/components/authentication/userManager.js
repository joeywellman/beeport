

const remoteURL = "https://beeport-api.herokuapp.com/"

export default {
    getAllUsers: () => {
        return fetch("https://beeport-api.herokuapp.com/")
            .then(au => au.json())
    },

    getSingleUser: (userId) => {
        return fetch(`${remoteURL}/users/${userId}`)
            .then(su => su.json())
    },

    postUser: (newUser) => {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(u => u.json())
    },

    // checkUserName: (userName) => {
    //     return fetch(`${remoteURL}/users?name=${userName}`)
    //        .then(u => u.json())
    // },

    checkUserEmail: (userEmail) => {
        return fetch(`${remoteURL}/users?userEmail=${userEmail}`)
            .then(su => su.json())
    },

    getUsers() {
        return fetch(`${remoteURL}/users`)
            .then(e => e.json())
    }
}