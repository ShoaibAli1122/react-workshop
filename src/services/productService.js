import axios from 'axios'
import http from '../http-common'

export const getProducts = () => {
    const res = http.get('/products')
    return res
}

// export const saveProducts = () => {
//     const { data } = http.post('/products')
//     return data
// }

export const deleteProducts = (id) => {
    console.log(id)
    const res = http.delete('/products', { data: { id } })
    return res
}
