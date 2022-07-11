import React from "react";
import { ReactDOM } from "react-dom";
import App from "./App";
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

const client=new ApolloClient({
    uri:'',
    cache:new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

