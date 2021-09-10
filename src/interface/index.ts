type Dispatch<A> = (value: A) => void;

export interface ICategory {
    id: number;
    name: string;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    category: number;
    price: number;
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
}

export interface ISignUpFormStore {
    email: string,
    password: string
}

export interface IOauthContextState {
    isLoggedIn: boolean,
    setIsLoggedIn: Function
}

export type IAContextState = {
    categories: ICategory[];
    products: IProduct[];
    users: IUser[];
    cart: IProduct[];
    isLoggedIn: boolean,
    setCategories: Function;
    setProducts: Function;
    setUsers: Function,
    setIsLoggedIn: Function,
    setCart: Function
}
