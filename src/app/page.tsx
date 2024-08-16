//import { useState } from "react";
import ProductCard from '@/components/ProductCard';
import Link from 'next/link'


export default function Home() {

  return (
<>

<Link href="/users">Users</Link> 
<ProductCard/>
</>

 
  );
}
