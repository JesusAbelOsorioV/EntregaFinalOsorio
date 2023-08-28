import { useState, useEffect } from 'react'
import datos from '../components/data/DataSushi.json'
import { useParams } from 'react-router-dom';
import ItemDetail from './Itemdetail';

const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([null]);
    const { itemId } = useParams()
    console.log(itemId)
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => { 
                const productById = datos.find(product => product.id === itemId)
                resolve(productById)}, 0)
        })

        promise.then(datos => setProduct(datos))
    }, [itemId])

    console.log(product)
    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer