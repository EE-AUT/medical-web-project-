import * as actionTypes from "./actionTypes"
import axios from 'axios'

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = token => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}


export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const logout = () => {
    console.log("Logout")
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    window.location.reload(); 

    return{
        type: actionTypes.AUTH_LOGOUT
    }

}



export const checkAuthTimeout = expirationTime => {
    return dispath => {
        setTimeout(() => {
            dispath(logout())
        }, expirationTime * 1000)
    }
}




export const authLogin = (uname, pass) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/api_user/login/', {
            password: pass,
            username: uname 
        })
        .then(res => {
            const token = res.data.token;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token)); 
            dispatch(checkAuthTimeout(3600));
            localStorage.setItem('signInError',0)

        })
        .catch(err => {
            dispatch(authFail(err))
            localStorage.setItem('signInError',1)

        })

    }
}


export const authSignup = (email, _password_, _FullName_, _phoneNumber_, _is_doctor_, _doctor_id_) => {
    return dispath => {
        dispath(authStart);
        axios.post('http://localhost:8000/api_user/register/', {
            email: email,
            phone_number: _phoneNumber_,
            password: _password_,
            full_name: _FullName_,
            register_type: "web_register",
            is_doctor: _is_doctor_,
            doctor_id: _doctor_id_
        })
        .then(res => {
            console.log(res)
            console.log(res.data.email[0] )

            // const token = res.data.key;
            // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            // localStorage.setItem('token', token);
            // localStorage.setItem('expirationDate', expirationDate);
            // dispath(authSuccess(token));
            // dispath(checkAuthTimeout(3600))
        })
        .catch(err=> {
            dispath(authFail(err))
            console.log(err.response)

        })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                // dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}


export const tokenConvertor=(token)=>{
    if(token===null){
        return false
    }
    else{
        return true
    }


}