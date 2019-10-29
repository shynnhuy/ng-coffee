export interface Roles {
    member?: boolean;
    moderator?: boolean;
    administrator?: boolean;
}

export interface User {
    uid: string;
    displayName: string;
    email: string;
    photoURL?: string;
    roles?: Roles;
}
