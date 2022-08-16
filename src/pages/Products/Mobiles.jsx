import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Mobile = () => {
const [listItems,setListItems] = useState([])

const fetchProducts =async()=>{
const getProducts = await fetch(`http://localhost:8083/api/v1/mobiles`)
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
      <Card.Title> <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
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

export default Mobile
