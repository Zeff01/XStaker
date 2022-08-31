import "./App.css";
import Web3 from "web3";
import { ethers } from "ethers";
import { Web3ReactProvider } from "@web3-react/core";
import Home from "./pages/Home";

function App() {
  function getLibrary(provider) {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
    // return new Web3(provider);
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Home />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
