export type Role = 'admin' | 'user' ;

export interface IUser {
    username: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role?: Role;
}
