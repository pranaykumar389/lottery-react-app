import "./styles.css";
import web3 from "./web3";

export default function App() {
  web3.eth.getAccounts().then(console.log);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
