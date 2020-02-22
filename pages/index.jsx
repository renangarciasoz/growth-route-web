import React, { FC } from "react";
import { withAuth, withLoginRequired } from "use-auth0-hooks";

import Header from '../components/Header';

const Index = ({ auth }) => {
  return (
    <div className="container">
      <Header title="Dashboard"/>
      <main>
        <h2 className="title">
          {auth.user.name}
        </h2>
      </main>
    </div>
  );
};

export default withLoginRequired(withAuth(Index));
