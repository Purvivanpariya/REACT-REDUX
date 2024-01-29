import axios from "axios"

export const VIEW_USER = () => {
    return async (patch) => {
        try{
            let {data} = await axios.get("http://localhost:8000/user")
            patch({
                type : 'viewuser',
                payload : data
            })
        }catch(err){
            console.log(err);
            return false
        }
    }
}


export const ADD_USER = (userdata) => {
    let {name,phone} = userdata
    return async (patch) => {
        try{
            let {data} = await axios.post("http://localhost:8000/user",{
                name : name,
                phone : phone
            })
            let record = await axios.get("http://localhost:8000/user")
            patch({
                type : 'adduser',
                payload : record.data
            })
        }catch(err){
            console.log(err);
            return false
        }
    }
}


