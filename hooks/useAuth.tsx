import { useState, createContext, useContext, useEffect, useMemo } from 'react'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../firebase';

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    loading: boolean
    error: string | null
}

const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    logout: async () => { },
    loading: false,
    error: null,
})

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>();
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const router = useRouter();

    useEffect(() => onAuthStateChanged(auth, (user) => {
       if (user) {
           setUser(user);
           setLoading(false);
           router.push('/');
       } else {
           setUser(null);
           setLoading(false);
           router.push('/login');
        }
        setInitialLoading(false);
    }), [auth]); 

    const signUp = async (email: string, password: string) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        }).catch((error) => alert(error.message)).finally(() => setLoading(false));
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        }).catch((error) => alert(error.message)).finally(() => setLoading(false));
    }

    const logout = async () => {
        setLoading(true);
        await signOut(auth).then(() => {
            setUser(null);
            router.push('/login');
            setLoading(false);
        }).catch((error) => alert(error.message)).finally(() => setLoading(false));
    }

    const memoedValue = useMemo(() => ({
        user,
        signUp,
        signIn,
        logout,
        loading,
        error, 
    }),
        [user, loading]
    )

    return (
        <AuthContext.Provider value={memoedValue}>
            {!initialLoading && children}
        </AuthContext.Provider>)
}

export default function useAuth() {
    return useContext(AuthContext);
}