export interface Friend{
    id: string;
    name: string;
}

export interface User{
    id: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    friends: Friend[];
}

export interface UserResponse{
    id: string;
    name: string;
}