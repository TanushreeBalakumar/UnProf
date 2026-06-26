import { useState } from "react";

function ConnectButton() {

  const [connected, setConnected] = useState(false);

  return (
    <button
      className="connect-btn"
      onClick={() => setConnected(!connected)}
    >
      {connected ? "✔ Connected" : "Connect"}
    </button>
  );
}

export default ConnectButton;