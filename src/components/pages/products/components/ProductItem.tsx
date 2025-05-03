import { Box } from "@mui/material";
import { ItemT } from "./type";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ item}:{item:ItemT}) => {
  return (
    <Link href="#" className=" w-[45%] flex justify-center items-center flex-col p-4 border-[1px] border-gray-400 bg-gray-200 rounded-3xl transition-all ease-linear hover:bg-gray-100  gap-y-4" >
      <h2 className="font-bold text-2xl ">{item.title}</h2> 
      <p className="text-[16px]">{item.description}</p>
      <Image width={200} height={150} src={item.image} alt="image"/>
    </Link>
  );
};

export default ProductItem;
