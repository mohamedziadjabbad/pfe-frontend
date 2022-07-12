import React from "react";

export const CheckSession = (navigate, ENVIRONMENT_VARIABLES) => {
    if(Object.keys(ENVIRONMENT_VARIABLES.session).length){
        console.log("There is a session")
        console.log(ENVIRONMENT_VARIABLES.session);
    } else {
        console.log("There is no session");
        navigate("/authentication/sign-in");
    }
}

