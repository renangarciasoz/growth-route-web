import { useAuth } from "use-auth0-hooks";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

const Login = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, logout, login } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="container">
        <main>
          <h1 className="title">Login</h1>
          <Button
            color="primary"
            onClick={() =>
              login({ appState: { returnTo: { pathname, query } } })
            }
          >
            login
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <main>
        <h1 className="title">Entrou</h1>
        <Button
          color="secondary"
          onClick={() => logout({ returnTo: "http://localhost:3000" })}
        >
          Log out
        </Button>
      </main>
    </div>
  );
};

export default Login;
