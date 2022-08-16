import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Fashion = () => {
const [listItems,setListItems] = useState([])

const fetchProducts =async()=>{
const getProducts = await fetch(`http://localhost:8083/api/v1/fashion`)
const jsonData = await getProducts.json()
setListItems(jsonData)
}
useEffect(()=>{
fetchProducts()
},[])

    return (
    <>

{listItems.map((item,id)=>{
return(

<div key={id} >
    
<Card style={{ width: '18rem' }}>
     
      <Card.Body>
      <Card.Title> <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
      alt="" width="100%" height='auto' /></Card.Title>
        <Card.Title> {item.name} </Card.Title>
        <Card.Title> {item.price} </Card.Title>
        <Card.Title> {item.brand} </Card.Title>
        <Card.Text>
        {item.about_product}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
</div>)
})}









    </>
  )
}

export default Fashion
