 export interface CustomersProps {} 
 export interface CustomersDataTypesD{
    customer_name: string
    _id: string 
    email: number
    mobile_number: string
    address: string
    update?: () => void
    delete?: () => void
 }