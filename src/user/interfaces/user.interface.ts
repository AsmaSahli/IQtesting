import { Document } from "mongoose";

export interface User extends Document{
    readonly usernames: string; 
    readonly email: string;
    readonly password: string;
}