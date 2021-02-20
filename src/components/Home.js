import ApolloClient from "apollo-boost";
import RootComponent from "./RootComponent";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
});

const Home = () => {
  return (
    <div className="home">
      <ApolloProvider client={client}>
        <RootComponent />
      </ApolloProvider>
    </div>
  );
};

export default Home;
