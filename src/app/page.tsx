import Banner from "@/app/Banner";
import ProductList from "./(home)/components/ProductList";
// import Image from "next/image";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE}/GetAllCustomer`);


  if (!response.ok) {
    throw new Error("Data is not fetching");
  }

  const data = await response.json();
  console.log("API Data:", data);

  return (
    <>
      <Banner />
      <ProductList />
    </>
  );
}
