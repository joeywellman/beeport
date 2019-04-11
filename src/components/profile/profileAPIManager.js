

const remoteURL = "https://beeport-api.herokuapp.com/"

export default {
    getAllProfiles: () => {
        return fetch(`${remoteURL}/users`)
            .then(aa => aa.json())
    },

    getSingleProfile: (id) => {
        return fetch(`${remoteURL}/users/${id}`)
            .then(su => su.json())
    },

    getUserProfile: (userId) => {
        return fetch(`${remoteURL}/users/?userId=${userId}`)
            .then(ua => ua.json())
    },

    postProfile: (newProfile) => {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProfile)
        })
    },

    putProfile: (editedProfile) => {
        return fetch(`${remoteURL}/users/${editedProfile.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProfile)

        })
        // .then(() => fetch(`${remoteURL}/users`))
        // .then(a => a.json())
    }
}