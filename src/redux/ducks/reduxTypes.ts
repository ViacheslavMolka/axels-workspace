import { PUT_DATA, LOAD_DATA } from './orders';


export type Orders = {
    price: number
    image_url: string
    title: string
    color: string
};

export type InitialStateType = {
    data: Array<Orders>
};

export type PutDataActionType = {
    type: typeof PUT_DATA
    payload: Array<Orders>
};

export type LoadDataActionType = {
    type: typeof LOAD_DATA
};
