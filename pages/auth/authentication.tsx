import {useContext} from 'react';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {AuthContext} from '../../src/components/auth-context';

const Authentication = () => {
    const authContext = useContext(AuthContext);

    return (
        <Auth supabaseClient={authContext.client}
              appearance={{theme: ThemeSupa}}
              theme={"dark"}
              providers={["google", "github"]}
              magicLink
              redirectTo="localhost:3000/mentorship"/>)
}

export default Authentication;
