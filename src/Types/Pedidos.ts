import { Product } from "./Products"

export type PedidosTypes={
    state:'entregue' | 'aguardando',
    date:string,
    product:Product[]
}