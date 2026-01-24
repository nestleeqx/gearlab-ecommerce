export interface iUser {
	id: string
	name: string
	email: string
	password: string
}

export interface iAuthState {
	user: iUser | null
	isAuthenticated: boolean
}
