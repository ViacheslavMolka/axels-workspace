export interface ICountry {
    val: string
};

export type BillingInitialValues = {
    fullname: string
    email: string
    address: string
    apt: string
    city: string
    country: string
    zip: string
};

export type ShippingInitialValues = {
    fullname: string
    phone: string
    address: string
    apt: string
    city: string
    country: string
    zip: string
};

export type HeaderProps = {
    number: number | null
};

export type AllFormData = {
    shipping: ShippingInitialValues
    billing: BillingInitialValues
};

export type PaymentInitialValues = {
    fullname: string
    number: string
    date: string
    code: string
};

type Orders = {
    price: number
    image_url: string
    title: string
    color: string
};

export type SummaryProps = {
    data: Orders[]
};