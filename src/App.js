import logo from './logo.svg';
import './App.css';
import { create } from 'ipfs-http-client';

function App() {

  async function upload(e) {
    try {
      const client = create('https://ipfs.infura.io:5001/api/v0');
      const added = await client.add("some fssssaile");
      console.log(added);
      console.log("fuck you")
      return added;
    } catch (err) {
      console.log(err)
    }
  }

  async function retrive(e) {
    const data = Buffer.concat(await all(node.cat(cid)));
    console.log(data.toString());
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={upload}>Upload</button>
      <button onClick={retrive}>Retrive</button>
    </div>
  );
}

export default App;
