import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './Itemdetail';
import { getFirestore, getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([null]);
    const [loading, setLoading] = useState([(true)]);
    const { itemId } = useParams()
    useEffect(() => {
        const db = getFirestore();
    
        const refDoc = doc(db, "dataSushi", itemId);
    
        getDoc(refDoc).then((snapshot) => {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        })
        .finally(() =>
            setLoading(false)
        ) 
      }, []);
      if (loading) return  <img src="https://res.cloudinary.com/dn6yf8b5z/image/upload/v1693358120/react%28JS%29/loading_dcmraj.png" alt="loader" className="rotate infinite linear" />
    
    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer