

const remoteURL = "http://localhost:5002"

export default {
    getAllApregs: () => {
        return fetch(`${remoteURL}/apregs`)
            .then(aa => aa.json())
    },

    getSingleApreg: (apregId) => {
        return fetch(`${remoteURL}/apregs/${apregId}`)
            .then(sa => sa.json())
    },

    getUserApregs: (userId) => {
        return fetch(`${remoteURL}/apregs/?userId=${userId}`)
            .then(ua => ua.json())
    },

    postApreg: (newApreg) => {
        return fetch(`${remoteURL}/apregs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newApreg)
        })
    },

    putApreg: (editedApreg) => {
        return fetch(`${remoteURL}/apregs/${editedApreg.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedApreg)

        })
        // .then(() => fetch(`${remoteURL}/apregs`))
        // .then(a => a.json())
    },

    deleteApreg: (apregId) => {
        return fetch(`${remoteURL}/apregs/${apregId}`, {
            method: "DELETE",

        })
        // .then(() => fetch(`${remoteURL}/apregs`))
        // .then(a => a.json())
    }
}