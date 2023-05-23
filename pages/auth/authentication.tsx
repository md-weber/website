import {useContext, useEffect} from 'react';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {AuthContext} from '../../src/components/auth-context';
import {useRouter} from 'next/router';

const Authentication = () => {
    const authContext = useContext(AuthContext);
    const {push} = useRouter();

    if (authContext.isLoggedIn) {
        push(`/account/dashboard/${authContext.userId}`);
    }

    return (
        <Auth supabaseClient={authContext.client}
              appearance={{theme: ThemeSupa}}
              theme={"dark"}
              providers={["google", "github"]}
              magicLink
              redirectTo="localhost:3000/mentorship"/>)
}

export default Authentication;
