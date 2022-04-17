import React from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "./firebase";

import {useAuth} from '../contexts/AuthContext';


const Chats = () => {
    const history = useHistory();
    const {user} = useAuth();
    console.log(user);
    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');

    }
    return (
        <div className='chats-page'>
            <div className="nav-bar">
                <div className="logo-tab">Chaddt</div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh-66px)"
                projectID="c4666de2-6a40-4d80-ba72-869d41c50556"
                userName="."
                userSecret='.'
            />
        </div>
    );
}

export default Chats;
