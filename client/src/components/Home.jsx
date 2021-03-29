import React from "react";

export function Home(user) {
  if (!user) return null;

  const createApiKey = () => {};

  const desactivateAndCreateApiKey = () => {
    createApiKey();
  };

  return (
    <div>
      {user.apiKey ? (
        <div>
          <p>{`Your active api-key is: ${user.apiKey}`}</p>
          <button onClick={desactivateAndCreateApiKey}>
            Create a new api-key and desactivate old one
          </button>
        </div>
      ) : (
        <div>
          <p>You don not have an apy key, create one please</p>
          <button onClick={createApiKey}>Create api-key</button>
        </div>
      )}
      <button>Show all api-keys</button>
    </div>
  );
}
