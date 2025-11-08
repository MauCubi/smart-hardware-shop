// product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
}

export const products: Product[] = [
  { id: 1, name: "GeForce RTX™ 3060 Ti VENTUS 2X0", description: "Good graphic card", price: 1599, category: "Graphic Card", image: '/img/1024.png', stock: 12 },
  { id: 2, name: "MEG 342C QD-OLED", description: "Good Monitoro", price: 999, category: "Monitors", image: '/img/monitor1.png', stock: 20 },
  { id: 3, name: "Monitor 27\" 144Hz", description: "Monitor Full HD de 27 pulgadas", price: 329, category: "Monitores", image: "/images/monitor-27.jpg", stock: 15 },
  { id: 4, name: "Monitor 24\" 75Hz", description: "Monitor básico para oficina", price: 159, category: "Monitores", image: "/images/monitor-24.jpg", stock: 25 },
  { id: 5, name: "Teclado Mecánico RGB", description: "Teclado con switches Blue y RGB", price: 89, category: "Periféricos", image: "/images/teclado-rgb.jpg", stock: 35 },
  { id: 6, name: "Mouse Gamer Inalámbrico", description: "Mouse inalámbrico con DPI ajustable", price: 49, category: "Periféricos", image: "/images/mouse-gamer.jpg", stock: 50 },
  { id: 7, name: "Auriculares Gaming", description: "Auriculares con micrófono y sonido envolvente", price: 79, category: "Periféricos", image: "/images/auriculares-gaming.jpg", stock: 30 },
  { id: 8, name: "Disco SSD 1TB NVMe", description: "Unidad SSD NVMe rápida", price: 129, category: "Almacenamiento", image: "/images/ssd-1tb.jpg", stock: 40 },
  // { id: 9, name: "Disco HDD 2TB", description: "Disco mecánico para almacenamiento masivo", price: 59, category: "Almacenamiento", image: "/images/hdd-2tb.jpg", stock: 50 },
  // { id: 10, name: "Memoria RAM 16GB DDR4", description: "RAM DDR4 16GB a 3200MHz", price: 74, category: "Componentes", image: "/images/ram-16gb.jpg", stock: 60 },
  // { id: 11, name: "Placa de Video RTX 4070", description: "Tarjeta gráfica NVIDIA RTX 4070", price: 899, category: "Componentes", image: "/images/rtx4070.jpg", stock: 8 },
  // { id: 12, name: "Placa Madre ATX", description: "Motherboard compatible con Intel y AMD", price: 149, category: "Componentes", image: "/images/placa-madre.jpg", stock: 12 },
  // { id: 13, name: "Fuente de Poder 650W", description: "Fuente de poder para PC Gaming", price: 89, category: "Componentes", image: "/images/fuente-650w.jpg", stock: 25 },
  // { id: 14, name: "Silla Gamer Ergonomica", description: "Silla cómoda para largas sesiones de juego", price: 199, category: "Muebles", image: "/images/silla-gamer.jpg", stock: 18 },
  // { id: 15, name: "Escritorio Gaming", description: "Escritorio con soporte para monitores y accesorios", price: 249, category: "Muebles", image: "/images/escritorio-gaming.jpg", stock: 10 },
  // { id: 16, name: "Router Wi-Fi 6", description: "Router de alta velocidad con cobertura amplia", price: 129, category: "Redes", image: "/images/router-wifi6.jpg", stock: 22 },
  // { id: 17, name: "Switch Ethernet 8 puertos", description: "Switch para oficina o casa", price: 49, category: "Redes", image: "/images/switch-8puertos.jpg", stock: 30 },
  // { id: 18, name: "Webcam HD 1080p", description: "Cámara para videollamadas y streaming", price: 69, category: "Periféricos", image: "/images/webcam-1080p.jpg", stock: 40 },
  // { id: 19, name: "Micrófono USB Condensador", description: "Micrófono para grabaciones y streaming", price: 89, category: "Periféricos", image: "/images/microfono-usb.jpg", stock: 25 },
  // { id: 20, name: "Tablet 10\" Android", description: "Tablet para estudio y entretenimiento", price: 199, category: "Tablets", image: "/images/tablet-10.jpg", stock: 15 },
];
