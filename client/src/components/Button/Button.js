import React from 'react';



const Button = ({ isSubmit }) => {
    
    return (
        
        <>
        {!show && <Button onClick={() => isSubmit(true)}>Submit</Button>}
        </>

    );
};
export default Button;