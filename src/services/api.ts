import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_UR
})


export async function getProducts(){
    const {data} = await client.get('/products')
    return data;
    
}

export async function getProduct(id: string | number) {
    const {data} = await client.get(`/products/${id}`)
    return data;
}