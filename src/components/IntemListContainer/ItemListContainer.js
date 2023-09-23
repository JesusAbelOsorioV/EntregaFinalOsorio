import { useState, useEffect } from 'react'
import ItemList from '../ItemLists';
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";

const IntemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([(true)]);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = id
            ? query(collection(db, "dataSushi"), where("categoria", "==", id)) : collection(db, "dataSushi")
        getDocs(refCollection)
        .then((snapshot) => {
          if (snapshot.size === 0) setProducts("no results")
          else {
            setProducts(
              snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
              })
            )
          }
        })
        .finally(() =>{
            setLoading(false)
        })
        }, [id]);

    if (loading) return  <img src="https://res.cloudinary.com/dn6yf8b5z/image/upload/v1693358120/react%28JS%29/loading_dcmraj.png" alt="loader" className="rotate infinite linear" />
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default IntemListContainer