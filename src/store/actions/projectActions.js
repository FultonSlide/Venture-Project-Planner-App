export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authorID,
            createdAt: new Date()
        })
        .then(data => dispatch({ type: 'CREATE_PROJECT', project }))
        .catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    }
};