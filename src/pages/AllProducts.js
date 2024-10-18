<<<<<<< HEAD
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CircularProgress } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { fetchingProducts } from './APIs';
import { toast } from 'react-toastify';


const fetchProducts = async () => {
  const { data } = await axios.get(fetchingProducts)
  return data?.products
} // fetching products

const delProduct = async (id) => {
  await axios.delete(`${fetchingProducts}/${id}`)

} // deleting product

function AllProducts() {

  const queryClient = useQueryClient();

  const { error, isLoading, data: products } = useQuery({
    queryKey: ["products"], queryFn: fetchProducts
  })

  const mutation = useMutation({
    mutationFn: delProduct,
    onSuccess: () => {
      toast.success('Product deleted successfully!', {
        autoClose: 2000 // Closes after 2 seconds
      });
      queryClient.invalidateQueries(["products"])  // Invalidate and refetch the products query after a successful delete

    }
  })

  if (isLoading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error.message}</div>;

  const handleDel = (id) => { //delete handler
    mutation.mutate(id)

  }
  return (
    <>
      <div className='container-fluid'>
      <div className='addbtn' style={{textAlign:"end"}}>
          <NavLink to = "/addproduct"><Button color='info' variant="contained">Add Product</Button></NavLink>
           </div>
        <div className='row'>
          {
            products?.map((product) => (
              <div className='col-md-3'>
                <Card sx={{ maxWidth: 345, margin: '15px', padding: "5px" }} key={product.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail} // Assuming `thumbnail` is available in the product data
                    alt={product.title}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      <b>{product.title.substring(0, 20)}</b>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Category: {product.category}
                    </Typography>
                    <Typography variant="body2">
                      {product.description.substring(0, 30)}..
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>

                    <NavLink to={`productDetails/${product.id}`}>
                      <Button size="small" variant='contained' color='info'>View details</Button>
                    </NavLink>
                    <NavLink to={`editproduct/${product.id}`}>
                    <Button size="small" variant='contained' color='warning'>Edit</Button>
                    </NavLink>
                    <Button size="small" variant='contained' color='error'  onClick={() => { handleDel(product.id) }}>Delete</Button>

                  </CardActions>
                </Card>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

=======
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, CardMedia, CircularProgress } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { fetchingProducts } from './APIs';
import { toast } from 'react-toastify';


const fetchProducts = async () => {
  const { data } = await axios.get(fetchingProducts)
  return data?.products
} // fetching products

const delProduct = async (id) => {
  await axios.delete(`${fetchingProducts}/${id}`)

} // deleting product

function AllProducts() {

  const queryClient = useQueryClient();

  const { error, isLoading, data: products } = useQuery({
    queryKey: ["products"], queryFn: fetchProducts
  })

  const mutation = useMutation({
    mutationFn: delProduct,
    onSuccess: () => {
      toast.success('Product deleted successfully!', {
        autoClose: 2000 // Closes after 2 seconds
      });
      queryClient.invalidateQueries(["products"])  // Invalidate and refetch the products query after a successful delete

    }
  })

  if (isLoading) return <CircularProgress color="inherit" />;
  if (error) return <div>Error: {error.message}</div>;

  const handleDel = (id) => { //delete handler
    mutation.mutate(id)

  }
  return (
    <>
      <div className='container-fluid'>
      <div className='addbtn' style={{textAlign:"end"}}>
          <NavLink to = "/addproduct"><Button color='info' variant="contained">Add Product</Button></NavLink>
           </div>
        <div className='row'>
          {
            products?.map((product) => (
              <div className='col-md-3'>
                <Card sx={{ maxWidth: 345, margin: '15px', padding: "5px" }} key={product.id}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail} // Assuming `thumbnail` is available in the product data
                    alt={product.title}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      <b>{product.title.substring(0, 20)}</b>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Category: {product.category}
                    </Typography>
                    <Typography variant="body2">
                      {product.description.substring(0, 30)}..
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>

                    <NavLink to={`productDetails/${product.id}`}>
                      <Button size="small" variant='contained' color='info'>View details</Button>
                    </NavLink>
                    <NavLink to={`editproduct/${product.id}`}>
                    <Button size="small" variant='contained' color='warning'>Edit</Button>
                    </NavLink>
                    <Button size="small" variant='contained' color='error'  onClick={() => { handleDel(product.id) }}>Delete</Button>

                  </CardActions>
                </Card>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

>>>>>>> 61c3f86302fb764f8c897bf883975207dfe05100
export default AllProducts