export interface DistributorsProps { }
export interface DistributorsDataTypes {
    _id: string
    email: string
    user_name: string
    mobile_number: number
    address: string
    points: number
    password: string
    // purchase_history:{};
    update?: () => void
    delete?: () => void
}