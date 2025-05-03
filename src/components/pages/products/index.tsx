"use client"
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./components/ProductItem";
import { ItemT } from "./components/type";

const ProductsPage = () => {
  const { data, isPending,isError } = useQuery({
    queryKey: ["fakeData"],
    queryFn: async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
  });
  console.log("data",data);
  
//    if (isError) {
    
//    }

  return <Box className="containerG">
    <Box className="flex justify-center items-center gap-5 flex-wrap mt-4">
        {data?.map((item:ItemT)=>(
            <ProductItem item={item}/>
        ))}
    </Box>
  </Box>;
};

export default ProductsPage;
