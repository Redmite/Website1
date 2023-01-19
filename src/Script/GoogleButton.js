import React from "react";


// a lot of this is still unfinished, but I will be working on it more once we get backend up and running
function GoogleButton() {
  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div id="g_id_onload"
         data-client_id="YOUR_GOOGLE_CLIENT_ID"
         data-login_uri="https://your.domain/your_login_endpoint"
         data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
    </>
  )
}

export default GoogleButton;