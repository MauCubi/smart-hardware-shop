import { AttributeType } from '../../generated/prisma/index';


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
    brandId: string;
    brands: {
      name: string
    };
    // productAttributes?: ProductAttributeSchema[]
}
export interface ProductFormType {
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
    brands: {
      name: string
    }
    productAttributes?: ProductAttributeSchema[]
}

export interface Category {
  name: string, 
  subCategories?: SubCategory[] 
}
export interface SubCategory {
  name: string, 
  category?: Category,
  attributes?: SubCategoryAttributes[]
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

export interface TableProducts {
  id: string;
  name: string;
  stock: number;
  price: number;
  brand: string | undefined;
  category: string;
  slug: string;
}

export interface AttributeOption {
  id: string,
  value: string,  
}

export interface SubCategoryAttributes {
  attribute: Attribute
}
export interface Attribute {
  id: string,
  name: string,
  type: AttributeType,
  group: string,
  unit?: string,
  required: boolean
  options?: AttributeOption[]
}

export interface ProductAttribute {
    group: string;
    name: string;
    unit: string | undefined | null;
    value: string | number | boolean | null;
}
export interface ProductAttributeSchema {
    id: number,
    attribute: Attribute,
    valueString?: string,
    valueNumber?: number,
    valueBoolean?: boolean,
    option?: {
      value: string
    }
}

