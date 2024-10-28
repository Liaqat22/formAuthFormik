import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid2, Typography, Container } from '@mui/material';
import { fetchingProducts } from './APIs';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { pid } = useParams(); // Get the product ID from the URL parameters
  const [productToEdit, setProductToEdit] = useState();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${pid}`);
        setProductToEdit(data)
        // Set to an empty object if not found
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductById(); // Call the async function
  }, [pid]); 

  // Update formData whenever productToEdit changes
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    console.log(productToEdit)
    if (productToEdit) {
      setFormData({
        title: productToEdit?.title || '',
        category: productToEdit?.category || '',
        price: productToEdit?.price || '',
        description: productToEdit?.description || '',
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value, // Convert price to number
    });
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.put(`${fetchingProducts}/${pid}`, formData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error); // Log the error
      throw new Error(error.response?.data?.message || 'Failed to update product');
    }
  };

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      toast.success('Product updated successfully!', {
        autoClose: 2000, // Closes after 2 seconds
      });
    },
    onError: () => {
      toast.error('Error in updating the product!', {
        autoClose: 2000, // Closes after 2 seconds
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom textAlign="center" className="mt-3 mb-3">
        Edit Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={2} display="flex" justifyContent="center">
          <Grid2 item xs={10} md={8}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={10} md={8}>
            <TextField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={10} md={8}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={10} md={8}>
            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>
          <Grid2 item xs={10} md={8}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={mutation.isLoading} // Disable button while submitting
            >
              {mutation.isLoading ? 'Updating...' : 'Save'}
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  );
}

export default EditProduct;
