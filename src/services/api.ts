import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const client = axios.create({
    baseURL: apiUrl
})


export async function getProducts(){
    const {data} = await client.get('/products')
    return data;
    
}

export async function getProduct(id: string | number) {
    const {data} = await client.get(`/products/${id}`)
    return data;
}