/* eslint-disable prettier/prettier */
import React from 'react';

const layout = ({children,recentpost}:{children:React.ReactNode,recentpost:React.ReactNode}) => {
    return (
        <>
        <h1>Home</h1>
            {children}
            {recentpost}
        </>
    );
};

export default layout;