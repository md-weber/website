import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import PreviewPage from './item-preview';

function LoginOrCheckout(): React.ReactElement {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext must be used within an AuthProvider');
    }

    const { isLoggedIn } = authContext;

    return (
        <div>
            {!isLoggedIn && (<Link href="./auth/auth-page">Create your account here.</Link>)}
            {isLoggedIn && (
                <PreviewPage />
            )}
        </div>
        );
}

export default LoginOrCheckout;
