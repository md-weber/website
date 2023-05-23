import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../../src/components/auth-context';
import ItemPreview from './item-preview';

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
                <ItemPreview />
            )}
        </div>
        );
}

export default LoginOrCheckout;
