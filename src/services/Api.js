import axios from "axios"

export async function get_data (url){
    const header = {

    }
    try{
       
       const res = await  axios.get(url,header);
       return res.data
    }
    catch(e){
            return e
    }
}

export async function post_data(url,data){
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    try{
        const res = await  axios.post(url,data,{header});
        return res.data
     }
     catch(e){
             return e
     }


}


