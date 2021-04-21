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

export const postData = async (data) => {
    try { 
         const result = await Axios({
                 method: "POST",
                 data,    
                 withCredentials: true,
                 url: "http://localhost:5000/event",
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
                 withCredentials: true,
                 url: `http://localhost:5000/event/${id}`,
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
                 url: `http://localhost:5000/event/${id}`,
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
            url: "http://localhost:5000/event",
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