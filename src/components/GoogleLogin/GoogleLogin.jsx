import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { GoogleBtn } from './GoogleLogin.styled';



const GoogleSignUp = () => {
  return (
      <div>
        <GoogleBtn>
               <GoogleLogin 
                        onSuccess={credentialResponse => {
                            // eslint-disable-next-line
                            const decoded = jwtDecode(credentialResponse?.credential);
                     alert("your registration was successful")
                  }}
                     onError={() => {
                     console.log('Login Failed');
                  }}
                  />
        </GoogleBtn>
      </div>
  );
};
export default GoogleSignUp;

