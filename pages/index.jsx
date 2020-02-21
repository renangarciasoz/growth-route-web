import React, { FC } from "react";
import { withAuth, withLoginRequired } from "use-auth0-hooks";

const Index = ({ auth }) => {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="#">Growth Route!</a>
        </h1>
        <h2 className="title">
          {auth.user.name}
        </h2>
      </main>
    </div>
  );
};

export default withLoginRequired(withAuth(Index));
