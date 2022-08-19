export type Image={
    thumbnail: string
    original: string
}

export interface Product{
    id: number;
    title:string;
    description: string;
    quantityAvailable:number;
    price:number;
    company:string;
    discount?:number;
    category:string;
    images:Image[]
}
