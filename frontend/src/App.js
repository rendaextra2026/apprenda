import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

// URL base da API (mockada para este MVP)
const API_BASE_URL = 'http://localhost:3000/api'; // Deve ser ajustado para o IP da máquina ou domínio

const Dashboard = ({ products }) => (
  <View style={styles.section}>
    <Text style={styles.title}>🚀 Dashboard - Lucro em Casa</Text>
    <Text style={styles.subtitle}>Seu Progresso: R$ 0.00 / R$ 2000.00 (Meta Mock)</Text>
    
    <Text style={styles.title}>Catálogo de Produtos em Tendência (MVP)</Text>
    {products.map(product => (
      <View key={product._id} style={styles.card}>
        <Text style={styles.cardTitle}>{product.name}</Text>
        <Text>Preço: R$ {product.price.toFixed(2)}</Text>
        <Text>Comissão: {(product.commission_rate * 100).toFixed(0)}%</Text>
        <Text style={styles.tag}>{product.category}</Text>
      </View>
    ))}
  </View>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simula a chamada à API do Backend
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível conectar ao Backend. Verifique a URL da API.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00C853" />
        <Text style={styles.loadingText}>Carregando Catálogo de Produtos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Dashboard products={products} />
        <Text style={styles.footer}>MVP - Estrutura de Código Inicial (React Native)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#00C853',
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
  },
  section: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  tag: {
    marginTop: 5,
    color: '#00C853',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 12,
    color: '#999',
  }
});
