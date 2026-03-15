
interface Category {
  name: string
}

interface SubCategory {
  name: string,
  category: string
}

interface Product {
  name: string,
  description: string,
  stock: number,
  price: number,
  slug: string,
  images: string[]
  subCategory: string
}

interface Attribute {  
  name:  string        
  type:  'STRING' | 'NUMBER' | 'BOOLEAN' | 'SELECT' 
  group: string
  required?: boolean
  unit?: string
}

interface ProductAttribute {
  attribute: string
  option?: string
  valueString?: string
  valueNumber?: number
  valueBoolean?: boolean
}

// interface SubCategoryAttribute {
//   subCategory: string
//   attribute: string
// }


interface SeedData {
  categories: Category[],
  subCategories: SubCategory[],
  products: Product[]
  attributes: Record<string, Attribute[]>
  attributeOptions: Record<string, string[]>
  productAttributes: Record<string, ProductAttribute[] >
}

export const seedData: SeedData = {

  categories: [
    { name: 'Motherboards' },
    { name: 'Processors' },
    { name: 'Storage' },
    { name: 'Graphic Cards' },
    { name: 'Memory Ram' },    
    { name: 'Power Supply Units' },
    { name: 'Periferics' },    
    { name: 'Cases' },
    { name: 'Audio' },
    { name: 'Monitors' },
    { name: 'Printers' },    
    { name: 'Chairs/Desks' },
    { name: 'Refrigerations' },    
    { name: 'Network/Connections' },
  ],

  subCategories: [
    { name: 'AMD Motherboards', category: 'Motherboards' },
    { name: 'Intel Motherboards', category: 'Motherboards' },
    { name: 'AMD Processors', category: 'Processors' },
    { name: 'Intel Processors', category: 'Processors' },
    { name: 'HDD', category: 'Storage' },
    { name: 'SDD', category: 'Storage' },
    { name: 'SDD M.2', category: 'Storage' },
    { name: 'External Disks', category: 'Storage' },
    { name: 'Pendrives', category: 'Storage' },
    { name: 'AMD Radeon', category: 'Graphic Cards' },
    { name: 'NVIDIA Geforce', category: 'Graphic Cards' },
    { name: 'DDR5', category: 'Memory Ram' },
    { name: 'DDR4', category: 'Memory Ram' },
    { name: 'DDR3', category: 'Memory Ram' },
    { name: 'PSUs', category: 'Power Supply Units' },
    { name: 'PSUs accesories', category: 'Power Supply Units' },
    { name: 'Keyboards', category: 'Periferics' },
    { name: 'Mouse', category: 'Periferics' },
    { name: 'Mouse Pad', category: 'Periferics' },
    { name: 'WebCam', category: 'Periferics' },
    { name: 'Gamepads', category: 'Periferics' },
    { name: 'Bundles', category: 'Periferics' },
    { name: 'Mini Tower', category: 'Cases' },
    { name: 'Mid Tower', category: 'Cases' },
    { name: 'Full Tower', category: 'Cases' },
    { name: 'Ultra Tower', category: 'Cases' },
    { name: 'Cases with PSU', category: 'Cases' },
    { name: 'Headphones', category: 'Audio' },
    { name: 'Speakers', category: 'Audio' },
    { name: 'Microphones', category: 'Audio' },
    { name: 'Audio Cards', category: 'Audio' },
    { name: 'Bluetooth Speakers', category: 'Audio' },
    { name: 'Accesories', category: 'Audio' },
    { name: 'Up to 75 Hz', category: 'Monitors' },
    { name: '100 - 144 Hz', category: 'Monitors' },
    { name: '165 - 180 Hz', category: 'Monitors' },
    { name: '200 - 240 Hz', category: 'Monitors' },
    { name: '280 Hz', category: 'Monitors' },
    { name: 'Video Cables', category: 'Monitors' },
    { name: 'Printers', category: 'Printers' },
    { name: 'Ink/Toners', category: 'Printers' },
    { name: 'Gaming Chairs', category: 'Chairs/Desks' },
    { name: 'Desktops', category: 'Chairs/Desks' },
    { name: 'Fan Coolers', category: 'Refrigerations' },
    { name: 'Water Coolers', category: 'Refrigerations' },
    { name: 'Cpu Coolers', category: 'Refrigerations' },
    { name: 'Thermal Paste', category: 'Refrigerations' },
    { name: 'Routers', category: 'Network/Connections' },
    { name: 'Network Cards', category: 'Network/Connections' },
    { name: 'WiFi Adapters', category: 'Network/Connections' },
  ],

  attributes: {
    gpu: [
      { name: 'GPU type', type: 'SELECT', group: 'General', required: true },
      { name: 'Chipset gpu', type: 'STRING', group: 'General', required: true },
      { name: 'Video input', type: 'BOOLEAN', group: 'General' },
      { name: 'Double bridge', type: 'BOOLEAN', group: 'General' },
      { name: 'Special features', type: 'STRING', group: 'General' },

      { name: 'Vga', type: 'NUMBER', group: 'Connectivity'},
      { name: 'Dvi digital', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Hdmi', type: 'NUMBER', group: 'Connectivity'},
      { name: 'Displayports', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Usb type-c', type: 'NUMBER', group: 'Connectivity' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Length', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },

      { name: 'Approximate consumption', type: 'NUMBER', group: 'Energy', unit: 'w' },
      { name: 'Minimum recommended Watts', type: 'NUMBER', group: 'Energy', unit: 'w' },

      { name: 'Amount of 6 pins Pcie', type: 'NUMBER', group: 'Energy' },
      { name: 'Amount of 8 pins Pcie', type: 'NUMBER', group: 'Energy' },
      { name: 'Amount of 16 pins adapters', type: 'NUMBER', group: 'Energy'},
      { name: 'Amount of 16 pins Pcie', type: 'NUMBER', group: 'Energy' },

      { name: 'Backplate', type: 'BOOLEAN', group: 'Coolers/Refrigeration' },
      { name: 'Block vga water cooling', type: 'BOOLEAN', group: 'Coolers/Refrigeration' },
      { name: 'Coolers', type: 'NUMBER', group: 'Coolers/Refrigeration' },

      { name: 'Core turbo speed', type: 'NUMBER', group: 'Extras', unit: 'mhz' },

      { name: 'GPU memory type', type: 'SELECT', group: 'Extras', required: true },
      { name: 'Memory size', type: 'NUMBER', group: 'Extras', unit: 'GB', required: true },
      { name: 'Memory speed', type: 'NUMBER', group: 'Extras', unit: 'mhz' },
      { name: 'Memory interface', type: 'NUMBER', group: 'Extras', unit: 'bits' },

      { name: 'Process types', type: 'STRING', group: 'Extras' },
      { name: 'Process quantity', type: 'NUMBER', group: 'Extras' },
    ],

    keyboard: [
      { name: 'Keyboard type', type: 'SELECT', group: 'General', required: true },
      { name: 'Switch type', type: 'SELECT', group: 'General' },
      { name: 'Mechanical', type: 'BOOLEAN', group: 'General' },
      { name: 'Layout', type: 'SELECT', group: 'General', required: true },

      { name: 'Connection type', type: 'SELECT', group: 'Connectivity', required: true },
      { name: 'USB passthrough', type: 'BOOLEAN', group: 'Connectivity' },
      { name: 'Cable length', type: 'NUMBER', group: 'Connectivity', unit: 'cm' },

      { name: 'RGB lighting', type: 'BOOLEAN', group: 'Features' },
      { name: 'Anti ghosting', type: 'BOOLEAN', group: 'Features' },
      { name: 'Programmable keys', type: 'BOOLEAN', group: 'Features' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Weight', type: 'NUMBER', group: 'Dimensions', unit: 'g' },
    ],

    mouse: [
      { name: 'Mouse type', type: 'SELECT', group: 'General', required: true },
      { name: 'Sensor type', type: 'SELECT', group: 'General' },
      { name: 'Max dpi', type: 'NUMBER', group: 'General', unit: 'dpi', required: true },


      { name: 'Connection type', type: 'SELECT', group: 'Connectivity', required: true },
      { name: 'Wireless', type: 'BOOLEAN', group: 'Connectivity' },
      { name: 'Battery life', type: 'NUMBER', group: 'Connectivity', unit: 'hours' },

      { name: 'Buttons', type: 'NUMBER', group: 'Features' },
      { name: 'RGB lighting', type: 'BOOLEAN', group: 'Features' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Weight', type: 'NUMBER', group: 'Dimensions', unit: 'g' },
    ],

    headphones: [
      { name: 'Headphone type', type: 'STRING', group: 'General', required: true },
      { name: 'Surround sound', type: 'BOOLEAN', group: 'General' },
      { name: 'Microphone', type: 'BOOLEAN', group: 'General', required: true },

      { name: 'Connection type', type: 'STRING', group: 'Connectivity', required: true },
      { name: 'USB', type: 'BOOLEAN', group: 'Connectivity' },
      { name: 'Jack 3.5mm', type: 'BOOLEAN', group: 'Connectivity' },

      { name: 'Frequency response', type: 'STRING', group: 'Audio' },
      { name: 'Impedance', type: 'NUMBER', group: 'Audio', unit: 'ohm' },

      { name: 'RGB lighting', type: 'BOOLEAN', group: 'Features' },

      { name: 'Weight', type: 'NUMBER', group: 'Dimensions', unit: 'g' },
    ],

    ssd: [
      { name: 'Storage capacity', type: 'NUMBER', group: 'General', unit: 'gb', required: true },
      { name: 'Form factor', type: 'STRING', group: 'General', required: true },
      { name: 'Interface', type: 'STRING', group: 'General', required: true },

      { name: 'Read speed', type: 'NUMBER', group: 'Performance', unit: 'mb/s' },
      { name: 'Write speed', type: 'NUMBER', group: 'Performance', unit: 'mb/s' },

      { name: 'NVMe support', type: 'BOOLEAN', group: 'Features' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Length', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },

      { name: 'Power consumption', type: 'NUMBER', group: 'Energy', unit: 'w' },
    ],

    hdd: [
      { name: 'Storage capacity', type: 'NUMBER', group: 'General', unit: 'tb', required: true },
      { name: 'Form factor', type: 'STRING', group: 'General', required: true },
      { name: 'Interface', type: 'STRING', group: 'General', required: true },

      { name: 'RPM', type: 'NUMBER', group: 'Performance', required: true },
      { name: 'Cache size', type: 'NUMBER', group: 'Performance', unit: 'mb' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },

      { name: 'Power consumption', type: 'NUMBER', group: 'Energy', unit: 'w' },
    ],

    ram: [
      { name: 'Capacity', type: 'NUMBER', group: 'General', unit: 'gb', required: true },
      { name: 'RAM memory type', type: 'SELECT', group: 'General', required: true },
      { name: 'Modules', type: 'NUMBER', group: 'General', required: true },

      { name: 'Frequency', type: 'NUMBER', group: 'Performance', unit: 'mhz', required: true },
      { name: 'CAS latency', type: 'NUMBER', group: 'Performance' },

      { name: 'RGB lighting', type: 'BOOLEAN', group: 'Features' },

      { name: 'Voltage', type: 'NUMBER', group: 'Energy', unit: 'v' },
    ],

    motherboard: [
      { name: 'Socket', type: 'STRING', group: 'General', required: true },
      { name: 'Chipset', type: 'STRING', group: 'General', required: true },
      { name: 'Form factor', type: 'STRING', group: 'General', required: true },

      { name: 'Max memory', type: 'NUMBER', group: 'Memory', unit: 'gb' },
      { name: 'Memory slots', type: 'NUMBER', group: 'Memory' },

      { name: 'PCIe slots', type: 'NUMBER', group: 'Expansion' },
      { name: 'M.2 slots', type: 'NUMBER', group: 'Expansion' },

      { name: 'SATA ports', type: 'NUMBER', group: 'Storage' },

      { name: 'USB ports', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Ethernet', type: 'BOOLEAN', group: 'Connectivity' },
      { name: 'WiFi', type: 'BOOLEAN', group: 'Connectivity' },
    ],

    psu: [
      { name: 'Power', type: 'NUMBER', group: 'General', unit: 'w', required: true },
      { name: 'Efficiency rating', type: 'STRING', group: 'General', required: true },
      { name: 'Modular', type: 'STRING', group: 'General', required: true },

      { name: 'PCIe connectors', type: 'NUMBER', group: 'Connectivity' },
      { name: 'SATA connectors', type: 'NUMBER', group: 'Connectivity' },
      { name: 'CPU connectors', type: 'NUMBER', group: 'Connectivity' },

      { name: 'Fan size', type: 'NUMBER', group: 'Cooling', unit: 'mm' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Length', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
    ],

    chair: [
      { name: 'Chair type', type: 'STRING', group: 'General', required: true },
      { name: 'Material', type: 'STRING', group: 'General', required: true },
      { name: 'Ergonomic', type: 'BOOLEAN', group: 'General' },

      { name: 'Reclining', type: 'BOOLEAN', group: 'Features' },
      { name: 'Adjustable height', type: 'BOOLEAN', group: 'Features' },
      { name: 'Lumbar support', type: 'BOOLEAN', group: 'Features' },

      { name: 'Max weight', type: 'NUMBER', group: 'Dimensions', unit: 'kg' },
    ],

    desk: [
      { name: 'Desk type', type: 'STRING', group: 'General', required: true },
      { name: 'Material', type: 'STRING', group: 'General', required: true },
      { name: 'Shape', type: 'STRING', group: 'General' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'cm', required: true },
      { name: 'Depth', type: 'NUMBER', group: 'Dimensions', unit: 'cm', required: true },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'cm', required: true },

      { name: 'Max load', type: 'NUMBER', group: 'Dimensions', unit: 'kg' },
    ],

    wifi_adapter: [
      { name: 'Max speed', type: 'NUMBER', group: 'General', unit: 'mbps', required: true },
      { name: 'WiFi standard', type: 'STRING', group: 'General', required: true },
      { name: 'Frequency bands', type: 'STRING', group: 'General' },

      { name: 'Ethernet port', type: 'BOOLEAN', group: 'Connectivity' },
      { name: 'WPS button', type: 'BOOLEAN', group: 'Connectivity' },

      { name: 'Antennas', type: 'NUMBER', group: 'Hardware' },
    ],

    monitor: [
      { name: 'Screen size', type: 'NUMBER', group: 'General', unit: 'inch', required: true },
      { name: 'Resolution', type: 'SELECT', group: 'General', required: true },
      { name: 'Panel type', type: 'SELECT', group: 'General', required: true },
      { name: 'Aspect ratio', type: 'SELECT', group: 'General', required: true },
      { name: 'Curved', type: 'BOOLEAN', group: 'General' },

      { name: 'Refresh rate', type: 'NUMBER', group: 'Performance', unit: 'hz', required: true },
      { name: 'Response time', type: 'NUMBER', group: 'Performance', unit: 'ms' },
      { name: 'Brightness', type: 'NUMBER', group: 'Performance', unit: 'nits' },
      { name: 'Contrast ratio', type: 'STRING', group: 'Performance' },

      { name: 'Hdmi', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Displayports', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Usb ports', type: 'NUMBER', group: 'Connectivity' },
      { name: 'Usb type-c', type: 'NUMBER', group: 'Connectivity' },

      { name: 'Speakers', type: 'BOOLEAN', group: 'Features' },
      { name: 'HDR support', type: 'BOOLEAN', group: 'Features' },
      { name: 'G-Sync support', type: 'BOOLEAN', group: 'Features' },
      { name: 'FreeSync support', type: 'BOOLEAN', group: 'Features' },
      { name: 'Vesa mount', type: 'BOOLEAN', group: 'Features' },

      { name: 'Width', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Height', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Depth', type: 'NUMBER', group: 'Dimensions', unit: 'mm' },
      { name: 'Weight', type: 'NUMBER', group: 'Dimensions', unit: 'g' },

      { name: 'Power consumption', type: 'NUMBER', group: 'Energy', unit: 'w' },
    ],
  },

  attributeOptions: {

    "GPU type": [
      "Dedicated",
      "Integrated",
      "External"
    ],

    "GPU memory type": [
      "GDDR5",
      "GDDR6",
      "GDDR6X",
      "HBM2",
      "HBM3"
    ],

    "RAM memory type": [
      "DDR3",
      "DDR4",
      "DDR5"
    ],

    "Keyboard type": [
      "Full size",
      "TKL",
      "75%",
      "65%",
      "60%"
    ],

    "Switch type": [
      "Cherry MX Red",
      "Cherry MX Blue",
      "Cherry MX Brown",
      "Gateron Red",
      "Gateron Brown",
      "Optical"
    ],

    "Layout": [
      "ANSI",
      "ISO"
    ],

    "Connection type": [
      "Wired",
      "Wireless",
      "Bluetooth",
      "2.4GHz Wireless"
    ],

    "Mouse type": [
      "Gaming",
      "Office",
      "Ergonomic",
      "Vertical"
    ],

    "Sensor type": [
      "Optical",
      "Laser"
    ],

    "Headphone type": [
      "Over ear",
      "On ear",
      "In ear"
    ],

    "Form factor": [
      "ATX",
      "Micro ATX",
      "Mini ITX"
    ],

    "Interface": [
      "SATA",
      "NVMe",
      "PCIe"
    ],

    "Efficiency rating": [
      "80+ Bronze",
      "80+ Silver",
      "80+ Gold",
      "80+ Platinum",
      "80+ Titanium"
    ],

    "Modular": [
      "Non modular",
      "Semi modular",
      "Fully modular"
    ],

    "Resolution": [
      "1920x1080",
      "2560x1440",
      "3840x2160",
      "3440x1440"
    ],

    "Panel type": [
      "IPS",
      "VA",
      "TN",
      "OLED"
    ],

    "Aspect ratio": [
      "16:9",
      "21:9",
      "32:9"
    ],

    "WiFi standard": [
      "WiFi 4",
      "WiFi 5",
      "WiFi 6",
      "WiFi 6E",
      "WiFi 7"
    ]

  },

  products: [
    {
    name: 'Graphic Card GeForce RTX™ 3060 Ti VENTUS 2X0',
    description: 'Good graphic card',
    price: 1599,
    subCategory: 'NVIDIA Geforce',
    images: [
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
    name: 'Monitor MEG 342C QD-OLED',
    description: 'Good Monitoro',
    price: 999,
    subCategory: '200 - 240 Hz',
    images: [
      '/img/products/monitor1.png',
      '/img/products/monitor2.png',
      '/img/products/monitor3.png',
      '/img/products/monitor4.png',
    ],
    stock: 20,
    slug: 'MEG_342C_QD-OLED',
  },
  {
    name: 'Monitor SAMSUNG 27” Odyssey G5 G53F QHD 144hz',
    description: 'Monitor Full HD de 27 pulgadas',
    price: 329,
    subCategory: '100 - 144 Hz',
    images: [
      '/img/products/monitor27.png',
      '/img/products/monitor272.png',
      '/img/products/monitor273.png',
      '/img/products/monitor274.png',
    ],
    stock: 0,
    slug: 'Monitor_27_144Hz',
  },
  {
    name: 'Monitor Philips 221v877 215” Full Hd 75 Hz',
    description: 'Monitor básico para oficina',
    price: 159,
    subCategory: 'Up to 75 Hz',
    images: ['/img/products/monitor75.png'],
    stock: 25,
    slug: 'Monitor_Philips_221v877_215_Full_Hd_75_Hz',
  },
  {
    name: 'Mechanical Keyboard Gamer Redragon Mitra K551rgb Esp Rgb Sw Red Keyboard Color Black',
    description: 'Teclado con switches Blue y RGB',
    price: 89,
    subCategory: 'Keyboards',
    images: [
      '/img/products/tecladorgba.png',
      '/img/products/tecladorgbb.png',
      '/img/products/tecladorgbc.png',
      '/img/products/tecladorgbd.png',
    ],
    stock: 4,
    slug: 'Mechanical_Keyboard_Gamer_Redragon_Mitra_K551rgb_Esp_Rgb_Sw_Red_Keyboard_Color_Black',
  },
  {
    name: 'Mouse Gamer Wireless Marvo M803 4800dpi Optic 7 Buttons LED',
    description: 'Mouse inalámbrico con DPI ajustable',
    price: 49,
    subCategory: 'Mouse',
    images: [
      '/img/products/mousev2.png',
      '/img/products/mousev3.png',
      '/img/products/mousev4.png',
      '/img/products/mousev5.png',
    ],
    stock: 50,
    slug: 'Mouse_Gamer_Wireless_Marvo_M803_4800dpi_Optic_7_Buttons_LED',
  },
  {
    name: 'Headphones Gamer Light Led Rgb Usb Headset Microphone Xtrike Me Gh516 Para Pc Black sonido envolvente 7.1',
    description: 'Auriculares con micrófono y sonido envolvente',
    price: 79,
    subCategory: 'Headphones',
    images: [
      '/img/products/auri.png',
      '/img/products/auri2.png',
      '/img/products/auri3.png',
    ],
    stock: 30,
    slug: 'Headphones_Gamer_Light_Led_Rgb_Usb_Headset_Microphone_Xtrike_Me_Gh516_Para_Pc_Black_sonido_envolvente_71',
  },
  {
    name: 'Ssd M.2 1tb Kingston Nvme Pcie 4.0 Nv3 color azul oscuro',
    description: 'Unidad SSD NVMe rápida',
    price: 129,
    subCategory: 'SDD M.2',
    images: [
      '/img/products/ssd.png',
      '/img/products/ssd2.png',
      '/img/products/ssd3.png',
    ],
    stock: 40,
    slug: 'Ssd_M2_1tb_Kingston_Nvme_Pcie_4.0_Nv3_color_azul_oscuro',
  },
  {
    name: 'Hdd Western Digital 2tb 3.5 Red Plus',
    description: 'Disco mecánico para almacenamiento masivo',
    price: 59,
    subCategory: 'HDD',
    images: ['/img/products/hdd.png', '/img/products/hdd2.png', '/img/products/hdd3.png'],
    slug: 'Hdd_Western_Digital_2tb_35_Red_Plus',
    stock: 50,
  },
  {
    name: 'Memory Ram Fury Beast Ddr4 16gb 1 Kingston Kf432c16bb1/16',
    description: 'RAM DDR4 16GB a 3200MHz',
    price: 329988,
    subCategory: 'DDR4',
    images: ['/img/products/ram.png', '/img/products/ram2.png', '/img/products/ram3.png', '/img/products/ram4.png'],
    slug: 'Memory_Ram_Fury_Beast_Ddr4_16gb_1_Kingston_Kf432c16bb116',
    stock: 50,
  },
  {
    name: 'Graphic Card Asus Tuf Rtx 4070 12gb Gaming Gddr6x 192 Bt',
    description: '"Tarjeta gráfica NVIDIA RTX 4070',
    price: 2653000,
    subCategory: 'NVIDIA Geforce',
    images: ['/img/products/gforce.png', '/img/products/gforce2.png', '/img/products/gforce3.png', '/img/products/gforce4.png'],
    slug: 'Asus_Tuf_Rtx_4070_12gb_Gaming_Gddr6x_192_Bt',
    stock: 50,
  },
  {
    name: 'Motherboard ASRock A520M-HDV AMD AM4 Ryzen Micro ATX DDR4 HDMI PCIe 3.0',
    description: 'Motherboard ASRock A520M-HDV AMD AM4 Ryzen Micro ATX DDR4 HDMI PCIe 3.0',
    price: 93585,
    subCategory: 'AMD Motherboards',
    images: ['/img/products/mother.png', '/img/products/mother2.png', '/img/products/mother3.png'],
    slug: 'Motherboard_ASRock_A520M-HDV_AMD_AM4_Ryzen_Micro_ATX_DDR4_HDMI_PCIe_30',
    stock: 50,
  },
  {
    name: 'Power Supply Unit PC ATX Segotep U6+ 650W 2x PCI-E +80% Efficency',
    description: 'Disco mecánico para almacenamiento masivo',
    price: 62546,
    subCategory: 'PSUs',
    images: ['/img/products/pcu.png', '/img/products/pcu2.png', '/img/products/pcu3.png', '/img/products/pcu4.png'],
    slug: 'Power_Supply_Unit_PC_ATX_Segotep_U6_650W_2x_PCI-E_80_Efficency',
    stock: 50,
  },
  {
    name: 'Nictom Ergonomic Pro PC Gaming Chair, Black, Reclining, Corduroy Upholstery Material',
    description: 'Nictom Ergonomic Pro PC Gaming Chair, Black, Reclining, Corduroy Upholstery Material',
    price: 399.999,
    subCategory: 'Gaming Chairs',
    images: ['/img/products/chair.png', '/img/products/chair2.png', '/img/products/chair3.png'],
    slug: 'Nictom_Ergonomic_Pro_PC_Gaming_Chair_Black_Reclining_Corduroy_Upholstery_Material',
    stock: 8,
  },
  {
    name: 'Gadnic L-Shaped Gaming Desk for PC, Wood, Carbon Fiber, Black',
    description: 'Gadnic L-Shaped Gaming Desk for PC, Wood, Carbon Fiber, Black',
    price: 265999,
    subCategory: 'Desktops',
    images: ['/img/products/desk.png', '/img/products/desk2.png'],
    slug: 'Gadnic_L_Shaped_Gaming_Desk_for_PC_Wood_Carbon_Fiber_Black',
    stock: 22,
  },
  {
    name: 'TP-Link TL-WA850RE V7 Wireless N 300Mbps Wall Mount Range Extender',
    description: 'TP-Link TL-WA850RE V7 Wireless N 300Mbps Wall Mount Range Extendero',
    price: 59,
    subCategory: 'WiFi Adapters',
    images: ['/img/products/wifi.png', '/img/products/wifi2.png', '/img/products/wifi3.png'],
    slug: 'TP_Link_TL_WA850RE_V7_Wireless_N_300Mbps_Wall_Mount_Range_Extender',
    stock: 50,
  }
  ],

  productAttributes: {
    "Graphic Card GeForce RTX™ 3060 Ti VENTUS 2X0": [
      { attribute:'GPU type', option: 'Dedicated'  },
      { attribute:'Chipset gpu', valueString: 'RTX 3060'  },
      { attribute:'Video input', valueBoolean: false  },
      { attribute:'Double bridge', valueBoolean: false  },
      { attribute:'Special features', valueString: 'Ray Tracing + DLSS'  },

      { attribute:'Vga', valueNumber: 0  },
      { attribute:'Dvi digital', valueNumber: 0  },
      { attribute:'Hdmi', valueNumber: 1  },
      { attribute:'Displayports', valueNumber: 2  },
      { attribute:'Usb type-c', valueNumber: 3  },

      { attribute:'Width', valueNumber: 116  },
      { attribute:'Height', valueNumber: 140  },
      { attribute:'Length', valueNumber: 224  },

      { attribute:'Approximate consumption', valueNumber: 170  },
      { attribute:'Minimum recommended Watts', valueNumber: 600  },
      { attribute:'Amount of 6 pins Pcie', valueNumber: 0  },
      { attribute:'Amount of 8 pins Pcie', valueNumber: 1  },
      { attribute:'Amount of 16 pins adapters', valueNumber: 0  },
      { attribute:'Amount of 16 pins Pcie', valueNumber: 0  },

      { attribute:'Backplate', valueBoolean: false  },
      { attribute:'Block vga water cooling', valueBoolean: false  },
      { attribute:'Coolers', valueNumber: 2  },

      { attribute:'Core turbo speed', valueNumber: 1740  },
      { attribute:'GPU memory type', option: 'GDDR6' },
      { attribute:'Memory size', valueNumber: 4  },
      { attribute:'Memory speed', valueNumber: 12000  },
      { attribute:'Memory interface', valueNumber: 128  },
      { attribute:'Process types', valueString: 'CUDA'  },
      { attribute:'Process quantity', valueNumber: 896  },

    ]
  }
    
  
}


