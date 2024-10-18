<<<<<<< HEAD
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button, Divider, CardMedia, Grid2 } from '@mui/material';

function PcardDetails({ details }) {
    return (
        <>
            {details && (
                <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }} key={details.id} >
                    <Grid2 container spacing={2} sx={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center"}}>
                        {/* Left side - Image */}
                        <Grid2 xs={12} sm={4}>
                            <CardMedia
                                component="img"
                                image={details.thumbnail}
                                alt={details.title}
                                sx={{ height: 'auto', width: '100%' }}
                            />
                        </Grid2>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h5" gutterBottom>
                                <b>{details.title}</b>
                            </Typography>
                            <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
                                Price: ${details.price} (Discount: {details.discountPercentage}%)
                            </Typography>
                            <Typography variant="body1">Rating: {details.rating} ★</Typography>
                            <Typography variant="body1">Availability: {details.availabilityStatus}</Typography>
                            <Typography variant="body2" color="text.secondary">SKU: {details.sku}</Typography>
                            <Typography variant="body2" color="text.secondary">Weight: {details.weight}g</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dimensions: {details.dimensions.width} x {details.dimensions.height} x {details.dimensions.depth} cm
                            </Typography>
                        </Grid2>
                        {/* Right side - Product Details */}
                        <Grid2 xs={12} sm={8}>
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    {details.description}
                                </Typography>

                            </CardContent>
                        </Grid2>
                    </Grid2>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Additional Information */}
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h6">Warranty Information</Typography>
                            <Typography variant="body2">{details.warrantyInformation}</Typography>
                        </Grid2>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h6">Shipping Information</Typography>
                            <Typography variant="body2">{details.shippingInformation}</Typography>
                        </Grid2>

                        {/* Return Policy */}
                        <Grid2 xs={12}>
                            <Typography variant="h6">Return Policy</Typography>
                            <Typography variant="body2">{details.returnPolicy}</Typography>
                        </Grid2>
                    </Grid2>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Reviews */}
                    <Typography variant="h6" gutterBottom>
                        Reviews
                    </Typography>
                    <List>
                        {details.reviews?.map((review, index) => (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemText primary={`${review.reviewerName} (${review.rating} ★)`} secondary={review.comment} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Action Buttons */}
                    <Grid2 container spacing={2}>
                        <Grid2 xs={6}>
                            <Button variant="contained" color="primary" fullWidth>
                                Buy Now
                            </Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Button variant="outlined" color="secondary" fullWidth>
                                Add to Cart
                            </Button>
                        </Grid2>
                    </Grid2>
                </Card>
            )}
        </>
    );
}

export default PcardDetails;
=======
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Button, Divider, CardMedia, Grid2 } from '@mui/material';

function PcardDetails({ details }) {
    return (
        <>
            {details && (
                <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }} key={details.id} >
                    <Grid2 container spacing={2} sx={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center"}}>
                        {/* Left side - Image */}
                        <Grid2 xs={12} sm={4}>
                            <CardMedia
                                component="img"
                                image={details.thumbnail}
                                alt={details.title}
                                sx={{ height: 'auto', width: '100%' }}
                            />
                        </Grid2>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h5" gutterBottom>
                                <b>{details.title}</b>
                            </Typography>
                            <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
                                Price: ${details.price} (Discount: {details.discountPercentage}%)
                            </Typography>
                            <Typography variant="body1">Rating: {details.rating} ★</Typography>
                            <Typography variant="body1">Availability: {details.availabilityStatus}</Typography>
                            <Typography variant="body2" color="text.secondary">SKU: {details.sku}</Typography>
                            <Typography variant="body2" color="text.secondary">Weight: {details.weight}g</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dimensions: {details.dimensions.width} x {details.dimensions.height} x {details.dimensions.depth} cm
                            </Typography>
                        </Grid2>
                        {/* Right side - Product Details */}
                        <Grid2 xs={12} sm={8}>
                            <CardContent>
                                <Typography variant="body1" color="text.secondary">
                                    {details.description}
                                </Typography>

                            </CardContent>
                        </Grid2>
                    </Grid2>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Additional Information */}
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h6">Warranty Information</Typography>
                            <Typography variant="body2">{details.warrantyInformation}</Typography>
                        </Grid2>
                        <Grid2 xs={12} sm={6}>
                            <Typography variant="h6">Shipping Information</Typography>
                            <Typography variant="body2">{details.shippingInformation}</Typography>
                        </Grid2>

                        {/* Return Policy */}
                        <Grid2 xs={12}>
                            <Typography variant="h6">Return Policy</Typography>
                            <Typography variant="body2">{details.returnPolicy}</Typography>
                        </Grid2>
                    </Grid2>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Reviews */}
                    <Typography variant="h6" gutterBottom>
                        Reviews
                    </Typography>
                    <List>
                        {details.reviews?.map((review, index) => (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemText primary={`${review.reviewerName} (${review.rating} ★)`} secondary={review.comment} />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ marginY: 2 }} />

                    {/* Action Buttons */}
                    <Grid2 container spacing={2}>
                        <Grid2 xs={6}>
                            <Button variant="contained" color="primary" fullWidth>
                                Buy Now
                            </Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Button variant="outlined" color="secondary" fullWidth>
                                Add to Cart
                            </Button>
                        </Grid2>
                    </Grid2>
                </Card>
            )}
        </>
    );
}

export default PcardDetails;
>>>>>>> 61c3f86302fb764f8c897bf883975207dfe05100
