"use client";

import ProductItem from "@/components/pages/products/components/ProductItem";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

const ProductsSlug = ({ params }: { params: { id: string | number } }) => {
  // const pathName=usePathname()
  const id = params.id;
  console.log(params.id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["productSlug"],
    queryFn: async () => {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`);
      return res.json();
    },
  });
  console.log(data);

//   if (error) {
//     return error.message;
//   }
//   if (isLoading) {
//     return <CircularProgress />;
//   }
  return (
    <Box className="containerG">
        <Box>
        {isLoading ? <CircularProgress /> : null}
        </Box>
        <p>{error?<p>{error.message}</p>:null}</p>
         
         <Box className="flex justify-center items-center mt-3">
         <ProductItem item={data}/>
         </Box>
    </Box>
  );
};

export default ProductsSlug;
