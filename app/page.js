"use client";
import ListingsHome from "@/components/listingsHome/listingsHome";
import { ProductsContextProvider } from "@/components/context/productsContext";

export default function Home() {
  return (
    <main>
      <ProductsContextProvider>
        <ListingsHome />
      </ProductsContextProvider>
    </main>
  );
}
