import axios from "axios";

const url = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos"

export const getTasks = async () => {
    try {
        const res = await axios.get(url);
        if (res.status == 200) {
            return {
                code: res.status,
                data: res.data
            }
        } else {
            return {
                code: res.status
            }
        }
    }catch(err){
        return err
    }
}

export const checkTasks = async (data) => {
    try{
        const res = await axios.patch(`${url}/${data.id}`, data);
        if(res.status === 200){
            return {
                "codigo": res.status,
                "data": res.data
            }
        }else{
            return {
                "codigo": res.status,
                "data": res.data
            }
        }
    }catch(err){
        return err
    }
}

export const addTasks = async (data) => {
    try{
        const res = await axios.post(url, data);
        if(res.status === 200){
            return {
                "codigo": res.status,
                "data": res.data
            }
        }else{
            return {
                "codigo": res.status,
                "data": res.data
            }
        }
    }catch(err){
        return err
    }
}

export const deleteTasks = async(data) => {
    try{
        const res = await axios.delete(`${url}/${data.id}`);
        if(res.status === 200){
            return {
                "codigo": res.status,
                "data": res.data
            }
        }else{
            return {
                "codigo": res.status,
                "data": res.data
            }
        }
    }catch(err){
        return err
    }
}