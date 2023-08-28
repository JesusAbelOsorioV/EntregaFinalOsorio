import { useState, useEffect } from 'react'
import datos from '../data/DataSushi.json'
import ItemList from '../ItemLists';
import { useParams } from 'react-router-dom';

const IntemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(datos), 2000)
        })

        promise.then(datos => {
            if (!id) {
                setProducts(datos)
            } else {
                const productsFiltered = datos.filter(
                    product => product.categoria === id
                )
                setProducts(productsFiltered)
            }
        })
    }, [id])

    console.log(products)
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default IntemListContainer