import ApolloClient from "apollo-boost";
import RootComponent from "./components/RootComponent";
import { ApolloProvider } from "@apollo/react-hooks";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <RootComponent />
    </ApolloProvider>
  );
};

export default App;
