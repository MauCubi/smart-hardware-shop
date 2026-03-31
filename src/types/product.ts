export interface Product {
    name: string;
    id: string;
    description: string | null;
    stock: number;
    sku: string | null;
    price: number;
    discountPrice: number | null;
    slug: string;
    images: string[];
    subCategoryId: string;
    subCategory?: SubCategory; 
    brandId: string
}

export interface Category {
  name: string,  
}
export interface SubCategory {
  name: string, 
  category?: Category 
}

export interface CartProducts {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  max: number;
}

interface Attribute {  
  name:  string        
  type:  'STRING' | 'NUMBER' | 'BOOLEAN' | 'SELECT' 
  group: string
  required?: boolean
  unit?: string
}

export interface ProductAttribute {
    group: string;
    name: string;
    unit: string | null;
    value: string | number | boolean | null;
}

