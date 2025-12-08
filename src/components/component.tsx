import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  products: Product[];
}

const BusinessSpecification: React.FC<BusinessSpecProps> = ({ products }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 500));
        if (!products) throw new Error('No products provided');
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  const renderProduct = ({ id, name, description, price, imageUrl }: Product) => (
    <div key={id} className="max-w-xs rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-4">
          ${price}
        </span>
      </div>
    </div>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <section aria-label="Business Specification" className={clsx('flex flex-wrap', { 'justify-center': isMobile })}>
      {products.map(renderProduct)}
    </section>
  );
};

export default BusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface BusinessSpecProps {
  products: Product[];
}

const BusinessSpecification: React.FC<BusinessSpecProps> = ({ products }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 500));
        if (!products) throw new Error('No products provided');
        setLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to load products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  const renderProduct = ({ id, name, description, price, imageUrl }: Product) => (
    <div key={id} className="max-w-xs rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mt-4">
          ${price}
        </span>
      </div>
    </div>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <section aria-label="Business Specification" className={clsx('flex flex-wrap', { 'justify-center': isMobile })}>
      {products.map(renderProduct)}
    </section>
  );
};

export default BusinessSpecification;