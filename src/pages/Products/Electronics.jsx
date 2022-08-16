import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Electronics = () => {
const [listItems,setListItems] = useState([])

const fetchProducts =async()=>{
const getProducts = await fetch(`http://localhost:8083/api/v1/electronics`)
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
      <Card.Title> <img src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
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

export default Electronics
