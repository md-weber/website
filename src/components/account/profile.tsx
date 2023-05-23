import React, {useContext, useState} from "react";
import {useRouter} from "next/router";
import {AuthContext} from "../auth-context";
import {useSnackbar} from "notistack";
import Button from "@mui/material/Button";
import styles from '../../../styles/profile.module.css';

const Profile = () => {
    const router = useRouter();
    const {userId} = router.query;
    const authContext = useContext(AuthContext);
    const {enqueueSnackbar} = useSnackbar();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            enqueueSnackbar('Your passwords do not match, please double check your new password.', {variant: 'error'})
            return;
        }

        try {
            await authContext.client.auth.updateUser({password})
        } catch (e) {
            console.error("Something bad happend", e)
            enqueueSnackbar('Sorry we could not save your new password, please try again later.', {variant: 'error'})
        }
    };

    const handleAccountDeletion = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await authContext.client.auth.admin.deleteUser(userId[0]);
            // TODO: Show a notification
        } catch (e) {
            console.error("Your account was not be able to delete, send a mail to the admin.")
            // TODO: Show a notification
        }

        // TODO: Redirect to the home page
    };
    
    return (
        <div>
            <h4>Change your password here</h4>
            <hr/>
            <form onSubmit={handlePasswordChange}>
                <p className={styles.passwordColumn}>
                    <label>New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span/>
                </p>
                <p className={styles.passwordColumn}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span/>
                </p>

                <Button type="submit" variant={"outlined"}>Change Password</Button>
            </form>

            <div>
                <h4 className={styles.dangerZone}>Danger Zone</h4>
                <hr/>
                <form onSubmit={handleAccountDeletion}>
                    <Button type="submit" variant={"outlined"} color={"error"}>Delete Account</Button>
                </form>
            </div>

        </div>
    )
};

export default Profile;
