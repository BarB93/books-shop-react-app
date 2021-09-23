import { Grid } from "@mui/material"
import React from "react"
import ContentLoader from "react-content-loader"

const GoodsLoader = (props) => (
  <Grid item xs={12} sm={6} md={4}>
    <ContentLoader 
      speed={2}
      width={"100%"}
      height={372}
      viewBox="0 0 368 372"
      backgroundColor="#f3f3f3"
      foregroundColor="#d2c6c6"
      {...props}
    >
      <rect x="0" y="308" rx="5" ry="5" width="40%" height="51" /> 
      <rect x="0" y="206" rx="5" ry="5" width="50%" height="36" /> 
      <rect x="0" y="255" rx="5" ry="5" width="50%" height="36" /> 
      <rect x="0" y="5" rx="5" ry="5" width="100%" height="180" />
    </ContentLoader>
  </Grid>
)

export default GoodsLoader