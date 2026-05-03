export interface Address {
    street: string,
    streetNumber: string,
    apartment?: string,
    country: string,
    city: string,
    state: string,
    zipCode: string,
    observation?: string,
    name: string,
    phone: string,
    idNumber: string,
    rememberAddress: boolean
}