import axios from "axios";
import config from "../config/config";

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/category/`)
        return result.data;
    } catch (error) {
        return await error.message
    }
}


const createRow = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/category/`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/category/${id}`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/category/${data.cate_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/category/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

export default {
    list,
    createRow,
    findRow,
    updateRow,
    deleteRow
}