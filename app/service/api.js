// api.js
import axios from 'axios';

// Utilise la variable d'environnement pour l'URL de l'API
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Fonction pour obtenir tous les produits
export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fonction pour obtenir un produit par son ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour ajouter un produit
export const addProduct = async (product) => {
  try {
    const response = await axios.post(apiUrl, product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Fonction pour mettre à jour un produit
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};

// Fonction pour supprimer un produit
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
