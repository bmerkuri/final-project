import { useQuery, gql } from "../../services/hasura-client";
import Page from "../../components/Page";
import { Logout } from "./Logout";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Form from "../../pages/Page";

const PING_ACTION_QUERY = gql`
  query {
    ping: ping_action {
      timestamp
    }
  }
`;

export const App = () => {
  const { isSuccess, data } = useQuery("PingAction", PING_ACTION_QUERY);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page withPadding title={"Survey App"} actions={<Logout />}>
            {isSuccess}
            <Form />
          </Page>
        }
      />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};
