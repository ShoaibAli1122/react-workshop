import http from '../http-common'

export const getProducts = () => {
    const res = http.get('/products')
    return res
}

export const saveProducts = (product) => {
    console.log("product", product)
    const res = http.post('/products', product)
    console.log("data", res)
    return res
}

export const deleteProducts = (id) => {
    console.log(id)
    const res = http.delete('/products', { data: { id } })
    return res
}
