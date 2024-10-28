import { List, ListItem, TextField, ListItemText, ListItemAvatar, Button, Box, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import useDebounce from './useDebounce'; // Adjust the import based on your file structure
import { NavLink } from 'react-router-dom';

function Searchbar() {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 200);

  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return axios.get(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`)
          .then(response => response.data); // Return the data directly
      }
      return { products: [] };
    },
    enabled: !!debouncedSearchTerm, // Prevent query from running if the search term is empty
  });

  function SearchResult({ isLoading, data }) {
    if (isLoading) return <div className="text-white">Loading...</div>;

    if (!data || data?.length === 0) {
      return <div className="text-white">No results found</div>;
    }

    return (
      <div>
        <List>
          {data.slice(0, 5).map((item) => (
            <ListItem key={item.id} className="d-flex justify-content-between align-items-center p-1">
              <ListItemAvatar>
                <Box component="img" src={item?.thumbnail} width="50px" height="50px" />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant='body2'>{item?.title}</Typography>}
                secondary={<Typography variant='body2'>${item?.price}</Typography>}
              />
              <Box>
                <Button
                  component={NavLink}
                  to={`productDetails/${item.id}`}
                  size="small"
                  variant="contained"
                  color="info"
                  className='mx-1'
                >
                  View details
                </Button>
                <Button
                  component={NavLink}
                  to={`editproduct/${item.id}`}
                  size="small"
                  variant="contained"
                  color="warning"
                  className='mx-1'
                >
                  Edit
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  const mainStyle = {
    position: "relative",
    textAlign: "center",
  }
  const subMain = {
    position: "absolute",
    minWidth: "50%",
    background: "#0c0b0bb0",
    transform: "translate(-50%, 0%)",
    // top: "50%",
    left: "50%",
    color: "white",
    zIndex: '7',
    backdropFilter: 'blur(2px)'


  }
  return (
    <div style={mainStyle}>
      <TextField
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your search term here" sx={{ width: "50%" }} />
      <div style={subMain}>
        {debouncedSearchTerm && (data?.products?.length > 0 || isLoading) && (
          <SearchResult isLoading={isLoading} data={data?.products} />
        )}
      </div>
    </div>
  );
}

export default Searchbar;
