import type { Tokens } from "../types/entities";

export async function login(email:string, password:string) {
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password:password })
    };
    return await fetch('http://localhost:11097/auth/login', requestOptions)
        .then((response) => response.json() as unknown as Promise<Tokens>)
}
