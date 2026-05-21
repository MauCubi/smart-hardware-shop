enum AttributeType {
  STRING,
  NUMBER,
  BOOLEAN,
  SELECT
}


export interface AttributeOption {
  id: string,
  value: string,  
}

export interface Attribute {
  id: string,
  name: string,
  type: AttributeType,
  group: string,
  unit?: string,
  required: boolean
  options: AttributeOption[]
}



