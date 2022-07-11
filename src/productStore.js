import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useProductStore = create(
  devtools((set) => ({
    products: {},
    loading: true,
    fetchProducts: async () => {
      const response = await fetch('http://localhost:5000/products');
      set({
        products: await response.json(),
        loading: false,
      });
    },
  }))
);
