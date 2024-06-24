import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

export default async function Providers() {
  const providers = await getProviders(); // Fetch providers here

  return (
    <>
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
