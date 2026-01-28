// product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  stock: number;
  slug: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'GeForce RTX™ 3060 Ti VENTUS 2X0',
    description: 'Good graphic card',
    price: 1599,
    category: 'Graphic Card',
    image: ['/img/products/1024.png', '/img/products/10242.png', '/img/products/10243.png', '/img/products/10244.png', '/img/products/10245.png'],
    stock: 12,
    slug: 'GeForce_RTX_3060_Ti_VENTUS_2X0',
  },
  {
    id: 2,
    name: 'MEG 342C QD-OLED',
    description: 'Good Monitoro',
    price: 999,
    category: 'Monitors',
    image: ['/img/products/monitor1.png', '/img/products/monitor2.png', '/img/products/monitor3.png', '/img/products/monitor4.png'],
    stock: 20,
    slug: 'MEG_342C_QD-OLED',
  },
  {
    id: 3,
    name: 'SAMSUNG 27” Odyssey G5 G53F QHD 144hz',
    description: 'Monitor Full HD de 27 pulgadas',
    price: 329,
    category: 'Monitores',
    image: ['/img/products/monitor27.png', '/img/products/monitor272.png', '/img/products/monitor273.png', '/img/products/monitor274.png'],
    stock: 0,
    slug: 'Monitor_27_144Hz',
  },
  {
    id: 4,
    name: 'Monitor Philips 221v877 215” Full Hd 75 Hz',
    description: 'Monitor básico para oficina',
    price: 159,
    category: 'Monitores',
    image: ['/img/products/monitor75.png'],
    stock: 25,
    slug: 'Monitor_Philips_221v877_215_Full_Hd_75_Hz',
  },
  {
    id: 5,
    name: 'Teclado Gamer Mecanico Redragon Mitra K551rgb Esp Rgb Sw Red Color del teclado Negro',
    description: 'Teclado con switches Blue y RGB',
    price: 89,
    category: 'Periféricos',
    image: ['/img/products/tecladorgba.png', '/img/products/tecladorgbb.png', '/img/products/tecladorgbc.png', '/img/products/tecladorgbd.png'],
    stock: 4,
    slug: 'Teclado_Mecanico_RGB',
  },
  {
    id: 6,
    name: 'Mouse Gamer Inalámbrico Marvo M803 4800dpi Óptico 7 Botones LED',
    description: 'Mouse inalámbrico con DPI ajustable',
    price: 49,
    category: 'Periféricos',
    image: ['/img/products/mousev2.png','/img/products/mousev3.png','/img/products/mousev4.png','/img/products/mousev5.png'],
    stock: 50,
    slug: 'Mouse_Gamer_Inalambrico_Marvo_M803_4800dpi_Optico_7_Botones_LED',
  },
  {
    id: 7,
    name: 'Auriculares Gamer Luz Led Rgb Usb Headset Micrófono Xtrike Me Gh516 Para Pc Negro sonido envolvente 7.1',
    description: 'Auriculares con micrófono y sonido envolvente',
    price: 79,
    category: 'Periféricos',
    image: ['/img/products/auri.png', '/img/products/auri2.png', '/img/products/auri3.png'],
    stock: 30,
    slug: 'Auriculares_Gamer_Luz_Led_Rgb_Usb_Headset_Microfono_Xtrike_Me_Gh516_Para_Pc_Negro_sonido_envolvente_71',
  },
  {
    id: 8,
    name: 'Disco sólido Ssd M.2 1tb Kingston Nvme Pcie 4.0 Nv3 color azul oscuro',
    description: 'Unidad SSD NVMe rápida',
    price: 129,
    category: 'Almacenamiento',
    image: ['/img/products/ssd.png', '/img/products/ssd2.png', '/img/products/ssd3.png'],
    stock: 40,
    slug: 'Disco_solido_Ssd_M2_1tb_Kingston_Nvme_Pcie_4.0_Nv3_color_azul_oscuro',
  },
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
