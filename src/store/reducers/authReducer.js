const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type){
        case 'LOGIN_FAILED':
            console.log('Login Error');
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('Successfully signed out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('User successfully signed up');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
};

export default authReducer;