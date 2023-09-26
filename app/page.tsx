'use client';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/product/ProductCard';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '../composable/fetcher';
import Script from 'next/script';
import { API } from '../apiendpoint';
import HomePage from '../pages/HomePage';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Home() {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();
  const { data, error } = useSWR(`${API}/api/products?populate=*`, fetcher()); // production end point
  if (error) return <div>Failed to load</div>;

  return (
    <main className="">
      <div className="">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </main>
  );
}
