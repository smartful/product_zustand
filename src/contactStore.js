import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useContactStore = create(
  devtools((set) => ({
    contacts: {},
    loading: true,
    fetchContacts: async () => {
      const response = await fetch('http://localhost:5000/contacts');
      set({
        contacts: await response.json(),
        loading: false,
      });
    },
  }))
);
