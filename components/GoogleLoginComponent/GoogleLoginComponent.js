import { GoogleLogin } from "react-google-login";

export default function GoogleLoginComponent({ onSuccess, onFailure }) {
  const clientId =
    "164811712266 - gpi1skgmt79vl9h0msclu5jhphn3a4bt.apps.googleusercontent.com";

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Mit Google anmelden"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
