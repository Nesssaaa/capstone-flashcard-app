import { GoogleLogin } from "@react-oauth/google";

export default function GoogleLoginComponent({ onSuccess, onFailure }) {
  const clientId =
    "164811712266 - gpi1skgmt79vl9h0msclu5jhphn3a4bt.apps.googleusercontent.com";

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
    />
  );
}
