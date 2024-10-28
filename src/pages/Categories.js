import { Box, Card, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const fetchCategories = async () => {
  const { data } = await axios.get('https://dummyjson.com/products/categories');
  return data;
}; // fetching all categories

function Categories() {
  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategories
  });
  const [cat, setCat] = useState('');

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  const fetchProductsByCategory = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/category/${cat}`);
    return data?.products;
  }; // fetching products by category

  const { error, isLoading, data: filterbyCat } = useQuery({
    queryKey: ["filterbyCat", cat],
    queryFn: fetchProductsByCategory,
    enabled: !!cat // only fetch when category is selected
  });

  return (
    <>
      <Box sx={{ minWidth: 120, mt: 3 }}>
        <FormControl fullWidth>
          <InputLabel>products by categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label={cat}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            {category?.map((c, index) => (
              <MenuItem value={c?.slug} key={index}>{c?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <div className='container-fluid'>
        <div className='row'>
          {isLoading && <p>Loading products...</p>}
          {error && <p>Error fetching products: {error.message}</p>}
          {filterbyCat?.map((c) => (
            <div className='col-md-3' key={c.id}>
              <Card sx={{ maxWidth: 345, margin: '15px', padding: "5px" }}>
                <CardMedia component='img' src={c?.thumbnail} width='100px' height='100px'/>
                <CardContent>
                  <Typography variant="h6" component="div">
                    <b>{c.title}</b>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Category: {c.category}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    Price: ${c.price}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
