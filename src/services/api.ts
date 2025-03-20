import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8005"
})


export async function getProducts(){
    const {data} = await client.get('/products')
    return data;
    
}

export async function getProduct(id: string | number) {
    const {data} = await client.get(`/products/${id}`)
    return data;
}