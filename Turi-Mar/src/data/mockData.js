export const PINS = [
  { id: 1, x: 52, y: 38, name: "Huarique El Ancla",     type: "food",    rating: 4.8 },
  { id: 2, x: 68, y: 55, name: "Mirador Punta Negra",   type: "tourism", rating: 4.6 },
  { id: 3, x: 40, y: 62, name: "Cevichería La Marea",   type: "food",    rating: 4.9 },
  { id: 4, x: 75, y: 30, name: "Fuerte San Felipe",     type: "tourism", rating: 4.5 },
  { id: 5, x: 58, y: 72, name: "La Pescadora",          type: "food",    rating: 4.7 },
];

export const ROUTE_POINTS = [
  [40, 62], [52, 38], [58, 72], [68, 55],
];

export const BUSINESS = {
  name: "Huarique El Ancla",
  subtitle: "Cevichería · Comida Marina · Tradición de Mar",
  hours: "Mar–Dom · 11:00 am – 6:00 pm",
  address: "Av. Costanera 142, Huanchaco, La Libertad",
  tags: ["Acepta Yape/Plin", "Comida Típica", "Vista al Mar"],
  photos: [
    "https://images.unsplash.com/photo-1761314036615-f1a9e69514d3?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1761314037182-8ea3363cf3a3?w=600&h=400&fit=crop&auto=format",
  ],
  reviews: [
    { author: "Mariela Torres",   avatar: "MT", stars: 5, text: "El ceviche mixto es increíble...", date: "hace 3 días" },
    { author: "Carlos Quispe",    avatar: "CQ", stars: 5, text: "La mejor causa rellena...", date: "hace 1 semana" },
  ],
};

export const FILTERS = [
  "Acepta Yape/Plin",
  "Comida Típica",
  "Huarique",
  "Punto Histórico",
  "Vista al Mar",
  "Solo Pescado",
];