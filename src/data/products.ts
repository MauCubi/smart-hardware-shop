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

export interface CartProducts {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  max: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'GeForce RTX™ 3060 Ti VENTUS 2X0',
    description: 'Good graphic card',
    price: 1599,
    category: 'Graphic Card',
    image: [
      '/img/products/1024.png',
      '/img/products/10242.png',
      '/img/products/10243.png',
      '/img/products/10244.png',
      '/img/products/10245.png',
    ],
    stock: 12,
    slug: 'GeForce_RTX_3060_Ti_VENTUS_2X0',
  },
  {
    id: 2,
    name: 'MEG 342C QD-OLED',
    description: 'Good Monitoro',
    price: 999,
    category: 'Monitors',
    image: [
      '/img/products/monitor1.png',
      '/img/products/monitor2.png',
      '/img/products/monitor3.png',
      '/img/products/monitor4.png',
    ],
    stock: 20,
    slug: 'MEG_342C_QD-OLED',
  },
  {
    id: 3,
    name: 'SAMSUNG 27” Odyssey G5 G53F QHD 144hz',
    description: 'Monitor Full HD de 27 pulgadas',
    price: 329,
    category: 'Monitores',
    image: [
      '/img/products/monitor27.png',
      '/img/products/monitor272.png',
      '/img/products/monitor273.png',
      '/img/products/monitor274.png',
    ],
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
    name: 'Mechanical Keyboard Gamer Redragon Mitra K551rgb Esp Rgb Sw Red Keyboard Color Black',
    description: 'Teclado con switches Blue y RGB',
    price: 89,
    category: 'Periféricos',
    image: [
      '/img/products/tecladorgba.png',
      '/img/products/tecladorgbb.png',
      '/img/products/tecladorgbc.png',
      '/img/products/tecladorgbd.png',
    ],
    stock: 4,
    slug: 'Mechanical_Keyboard_Gamer_Redragon_Mitra_K551rgb_Esp_Rgb_Sw_Red_Keyboard_Color_Black',
  },
  {
    id: 6,
    name: 'Mouse Gamer Wireless Marvo M803 4800dpi Optic 7 Buttons LED',
    description: 'Mouse inalámbrico con DPI ajustable',
    price: 49,
    category: 'Periféricos',
    image: [
      '/img/products/mousev2.png',
      '/img/products/mousev3.png',
      '/img/products/mousev4.png',
      '/img/products/mousev5.png',
    ],
    stock: 50,
    slug: 'Mouse_Gamer_Wireless_Marvo_M803_4800dpi_Optic_7_Buttons_LED',
  },
  {
    id: 7,
    name: 'Headphones Gamer Light Led Rgb Usb Headset Microphone Xtrike Me Gh516 Para Pc Black sonido envolvente 7.1',
    description: 'Auriculares con micrófono y sonido envolvente',
    price: 79,
    category: 'Periféricos',
    image: [
      '/img/products/auri.png',
      '/img/products/auri2.png',
      '/img/products/auri3.png',
    ],
    stock: 30,
    slug: 'Headphones_Gamer_Light_Led_Rgb_Usb_Headset_Microphone_Xtrike_Me_Gh516_Para_Pc_Black_sonido_envolvente_71',
  },
  {
    id: 8,
    name: 'Ssd M.2 1tb Kingston Nvme Pcie 4.0 Nv3 color azul oscuro',
    description: 'Unidad SSD NVMe rápida',
    price: 129,
    category: 'Storage',
    image: [
      '/img/products/ssd.png',
      '/img/products/ssd2.png',
      '/img/products/ssd3.png',
    ],
    stock: 40,
    slug: 'Ssd_M2_1tb_Kingston_Nvme_Pcie_4.0_Nv3_color_azul_oscuro',
  },
  {
    id: 9,
    name: 'Hdd Western Digital 2tb 3.5 Red Plus',
    description: 'Disco mecánico para almacenamiento masivo',
    price: 59,
    category: 'Storage',
    image: ['/img/products/hdd.png', '/img/products/hdd2.png', '/img/products/hdd3.png'],
    slug: 'Hdd_Western_Digital_2tb_35_Red_Plus',
    stock: 50,
  },
  {
    id: 10,
    name: 'Memory Ram Fury Beast Ddr4 16gb 1 Kingston Kf432c16bb1/16',
    description: 'RAM DDR4 16GB a 3200MHz',
    price: 329988,
    category: 'Memory',
    image: ['/img/products/ram.png', '/img/products/ram2.png', '/img/products/ram3.png', '/img/products/ram4.png'],
    slug: 'Memory_Ram_Fury_Beast_Ddr4_16gb_1_Kingston_Kf432c16bb116',
    stock: 50,
  },
  {
    id: 11,
    name: 'Asus Tuf Rtx 4070 12gb Gaming Gddr6x 192 Bt',
    description: '"Tarjeta gráfica NVIDIA RTX 4070',
    price: 2653000,
    category: 'Graphic Card',
    image: ['/img/products/gforce.png', '/img/products/gforce2.png', '/img/products/gforce3.png', '/img/products/gforce4.png'],
    slug: 'Asus_Tuf_Rtx_4070_12gb_Gaming_Gddr6x_192_Bt',
    stock: 50,
  },
  {
    id: 12,
    name: 'Motherboard ASRock A520M-HDV AMD AM4 Ryzen Micro ATX DDR4 HDMI PCIe 3.0',
    description: 'Motherboard ASRock A520M-HDV AMD AM4 Ryzen Micro ATX DDR4 HDMI PCIe 3.0',
    price: 93585,
    category: 'Motherboard',
    image: ['/img/products/mother.png', '/img/products/mother2.png', '/img/products/mother3.png'],
    slug: 'Motherboard_ASRock_A520M-HDV_AMD_AM4_Ryzen_Micro_ATX_DDR4_HDMI_PCIe_30',
    stock: 50,
  },
  {
    id: 13,
    name: 'Power Supply Unit PC ATX Segotep U6+ 650W 2x PCI-E +80% Efficency',
    description: 'Disco mecánico para almacenamiento masivo',
    price: 62546,
    category: 'Almacenamiento',
    image: ['/img/products/pcu.png', '/img/products/pcu2.png', '/img/products/pcu3.png', '/img/products/pcu4.png'],
    slug: 'Power_Supply_Unit_PC_ATX_Segotep_U6_650W_2x_PCI-E_80_Efficency',
    stock: 50,
  },
  {
    id: 14,
    name: 'Nictom Ergonomic Pro PC Gaming Chair, Black, Reclining, Corduroy Upholstery Material',
    description: 'Nictom Ergonomic Pro PC Gaming Chair, Black, Reclining, Corduroy Upholstery Material',
    price: 399.999,
    category: 'Chairs/Desks',
    image: ['/img/products/chair.png', '/img/products/chair2.png', '/img/products/chair3.png'],
    slug: 'Nictom_Ergonomic_Pro_PC_Gaming_Chair_Black_Reclining_Corduroy_Upholstery_Material',
    stock: 8,
  },
  {
    id: 15,
    name: 'Gadnic L-Shaped Gaming Desk for PC, Wood, Carbon Fiber, Black',
    description: 'Gadnic L-Shaped Gaming Desk for PC, Wood, Carbon Fiber, Black',
    price: 265999,
    category: 'Chairs/Desks',
    image: ['/img/products/desk.png', '/img/products/desk2.png'],
    slug: 'Gadnic_L_Shaped_Gaming_Desk_for_PC_Wood_Carbon_Fiber_Black',
    stock: 22,
  },
  {
    id: 16,
    name: 'TP-Link TL-WA850RE V7 Wireless N 300Mbps Wall Mount Range Extender',
    description: 'TP-Link TL-WA850RE V7 Wireless N 300Mbps Wall Mount Range Extendero',
    price: 59,
    category: 'Network/Connection',
    image: ['/img/products/wifi.png', '/img/products/wifi2.png', '/img/products/wifi3.png'],
    slug: 'TP_Link_TL_WA850RE_V7_Wireless_N_300Mbps_Wall_Mount_Range_Extender',
    stock: 50,
  },
 
  // { id: 15, name: "Escritorio Gaming", description: "Escritorio con soporte para monitores y accesorios", price: 249, category: "Muebles", image: "/images/escritorio-gaming.jpg", stock: 10 },
  // { id: 16, name: "Router Wi-Fi 6", description: "Router de alta velocidad con cobertura amplia", price: 129, category: "Redes", image: "/images/router-wifi6.jpg", stock: 22 },
  // { id: 17, name: "Switch Ethernet 8 puertos", description: "Switch para oficina o casa", price: 49, category: "Redes", image: "/images/switch-8puertos.jpg", stock: 30 },
  // { id: 18, name: "Webcam HD 1080p", description: "Cámara para videollamadas y streaming", price: 69, category: "Periféricos", image: "/images/webcam-1080p.jpg", stock: 40 },
  // { id: 19, name: "Micrófono USB Condensador", description: "Micrófono para grabaciones y streaming", price: 89, category: "Periféricos", image: "/images/microfono-usb.jpg", stock: 25 },
  // { id: 20, name: "Tablet 10\" Android", description: "Tablet para estudio y entretenimiento", price: 199, category: "Tablets", image: "/images/tablet-10.jpg", stock: 15 },
];
