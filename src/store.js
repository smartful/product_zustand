import create from 'zustand';

export const useStore = create((set) => ({
  products: {},
  loading: true,
  fetchProducts: async () => {
    const response = await fetch('/products');
    set({
      products: await response.json(),
      loading: false,
    });
  },
}));
