

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
  inStock: number,
  price: number,
  slug: string,
  images: string[]
  subCategory: string
}

interface SeedData {
  categories: Category[],
  subCategories: SubCategory[],
  // products: Product[],  
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
  ]
}

