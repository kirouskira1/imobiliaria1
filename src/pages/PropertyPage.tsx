import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PropertyDetails from "../components/property/PropertyDetails";

// Mock de propriedades (ideal: buscar de um contexto ou API futuramente)
const properties = [
  {
    id: "1",
    title: "Apartamento de Luxo em Alphaville",
    address: "Alameda Rio Negro, 500 - Alphaville, Barueri",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070",
    propertyType: "Apartamento",
  },
  {
    id: "2",
    title: "Casa em Condomínio Fechado",
    address: "Rua dos Pinheiros, 1000 - Jardim Europa, São Paulo",
    price: 2500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2070",
    propertyType: "Casa",
  },
  {
    id: "3",
    title: "Studio Moderno no Centro",
    address: "Av. Paulista, 1500 - Bela Vista, São Paulo",
    price: 650000,
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980",
    propertyType: "Studio",
  },
];

const PropertyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <Layout>
        <div className="container max-w-2xl mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Imóvel não encontrado</h1>
          <button onClick={() => navigate(-1)} className="text-estate-primary underline">Voltar</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-3xl mx-auto py-8 animate-fade-in">
        <PropertyDetails property={property} onScheduleVisit={() => {}} />
      </div>
    </Layout>
  );
};

export default PropertyPage; 