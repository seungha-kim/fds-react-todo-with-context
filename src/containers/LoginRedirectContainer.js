import React from "react";

import { PageConsumer } from "../contexts/PageContext";
import { getToken } from "../todoAPI";
import OnMount from "../components/OnMount";

export default () => (
  <PageConsumer>
    {({ goToLoginPage }) =>
      getToken() ? null : <OnMount onMount={goToLoginPage} />
    }
  </PageConsumer>
);
