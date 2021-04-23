import Axios from 'axios';
import axios from 'axios';

const BACKEND_URL = "192.53.174.4:5000"

export const login = async (setUser, username, password, history) => {
   try { 
        const result = await Axios({
                method: "POST",
                data: {
                    username:username,
                    password:password
                },    
                withCredentials: true,
                url: `http://${BACKEND_URL}/auth/login`,
                })
        setUser(result.data.username)
        return true;
    } catch(e) {
        alert(e);
    }
    return false;
  };

export const postData = async (data) => {
    try { 
         const result = await Axios({
                 method: "POST",
                 data,    
                 headers: {
                    'Content-Type': 'multipart/form-data'
                },
                 withCredentials: true,
                 url: `http://${BACKEND_URL}/event`,
                 })
         return result;
     } catch(e) {
         return e;
     }
};

export const updateData = async (data,id) => {
    try { 
         const result = await Axios({
                 method: "PUT",
                 data,    
                 headers: {
                    'Content-Type': 'multipart/form-data'
                },
                 withCredentials: true,
                 url: `http://${BACKEND_URL}/event/${id}`,
                 })
         return result;
     } catch(e) {
         return e;
     }
};

export const deleteData = async (id) => {
    try { 
         const result = await Axios({
                 method: "DELETE",
                 withCredentials: true,
                 url: `http://${BACKEND_URL}/event/${id}`,
                 })
         return result;
     } catch(e) {
         return e;
     }
};

export const getData = async () =>{
    try {
        const result = await Axios({
            method: "GET",
            withCredentials: true,
            url: `http://${BACKEND_URL}/event`,
        })
        return result
    } catch(err) {
        return err
    }
}

export const getDataPublic = async () =>{
    try {
        const result = await Axios({
            method: "GET",
            withCredentials: true,
            url: `http://${BACKEND_URL}/event/some`,
        })
        return result
    } catch(err) {
        return err
    }
}

export const getUser = async () => {
    try{
        const result = await Axios({
            method: "GET",
            withCredentials: true,
            url: `http://${BACKEND_URL}/auth`,
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
        url: `http://${BACKEND_URL}/auth/logout`,
      })
      .then((res) => console.log(res.status))
      .catch(e=>console.log(e))
}