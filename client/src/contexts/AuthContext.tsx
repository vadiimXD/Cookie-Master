import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export function AuthContextProvider(props: any) {

    const [authState, setAuthState] = useState<any>({})

    const contextData = {
        userId: authState.userId,
        token: authState.token,
        email: authState.email,
        setState: setAuthState
    }

    return (
        <AuthContext.Provider value={null}>
            {props.children}
        </AuthContext.Provider>
    )
}