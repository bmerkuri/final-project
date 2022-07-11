import React from "react";
import { ReactDOM } from "react-dom";
import App from "./App";
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";

const client=new ApolloClient({
    uri:'',
    cache:new InMemoryCache()
})


