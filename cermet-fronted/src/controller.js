import axios from 'axios';
import Axios from 'axios';

export const login = async (setUser, username, password, history) => {
   try { 
        const result = await Axios({
                method: "POST",
                data: {
                    username:username,
                    password:password
                },    
                withCredentials: true,
                url: "http://localhost:5000/auth/login",
                })
        setUser(result.data.username)
        return true;
    } catch(e) {
        alert(e);
    }
    return false;
  };
export const getData = () =>{
    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/event",
      }).then((res) => console.log(res)).catch(e=>console.log(e))
}
export const getUser = async () => {
    try{
        const result = await Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:5000/auth",
          })
        return result.data.username.name
    } catch(e) {
        console.log(e)
    }
}

export const logout = () => {
    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:5000/auth/logout",
      })
      .then((res) => console.log(res.status))
      .catch(e=>console.log(e))
}