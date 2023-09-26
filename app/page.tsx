'use client';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/product/ProductCard';
import Link from 'next/link';
import useSWR from 'swr';
import HomePage from './HomePage';
import { fetcher } from '../composable/fetcher';
import Script from 'next/script';
import { API } from '../apiendpoint';

export default function Home() {
  const count = useSelector((state: any) => state.global.value);
  const dispatch = useDispatch();
  const { data, error } = useSWR(`${API}/api/products?populate=*`, fetcher()); // production end point
  if (error) return <div>Failed to load</div>;

  return (
    <main className="">
      <div className="diaphonia-logo flex items-center m-24">
        {/* <HomePage /> */}
        <h1>sdf</h1>
      </div>
    </main>
  );
}
