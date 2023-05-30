import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLoginStatus } from '../services/authService'
import { toast } from 'react-toastify'
import { SET_LOGIN } from '../redux/features/auth/authSlice'


const useRedirectLoggedOutUser = (path) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirectLoggedOutUser = async()=>{
        const isLoggedIn = await getLoginStatus();
        dispatch(SET_LOGIN(isLoggedIn));
        if(!isLoggedIn){
            toast.info("Please login to continue.");
            navigate(path);
            return;
        }
    }
    useEffect(() => {
        redirectLoggedOutUser();
        // eslint-disable-next-line
    }, [navigate, path, dispatch])
}

export default useRedirectLoggedOutUser
