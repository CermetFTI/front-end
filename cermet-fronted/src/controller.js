import Axios from 'axios';

export const login = (setUser) => {
    Axios({
      method: "POST",
      data: {
        username: 'mazaya',
        password: 'accessdenied',
      },    
      withCredentials: true,
      url: "http://localhost:5000/auth/login",
    }).then((res) =>{
            setUser(res.data.username);
            console.log(res.data.username)
        })
        .catch(e=>alert(e))
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