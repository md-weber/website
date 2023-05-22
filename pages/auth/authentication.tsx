import {useContext, useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {AuthContext} from "./AuthContext";

const Authentication = () => {
    const authContext = useContext(AuthContext);
    
    if (!authContext.isLoggedIn) {
        return (
            <Auth supabaseClient={authContext.client}
                  appearance={{theme: ThemeSupa}}
                  theme={"dark"}
                  providers={["google", "github"]}
                  magicLink
                  redirectTo="localhost:3000/mentorship"/>)
    } else {
        return (
            <div> You are already logged in </div>
        )
    }
}

export default Authentication;
