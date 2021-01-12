# @vmcodes/hide-me

## Getting Started

npm i @vmcodes/hide-me

### [Demo](https://vmcodes-hide-me.netlify.app/)

---

### Basic Usage.

```javascript
import logo from "./logo.svg";
import "./App.css";
import HideMe from "@vmcodes/hide-me";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HideMe
          Child={
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          }
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
```

---

### Default CSS:

```javascript
const [navBar, setNavBar] =
  React.useState <
  React.CSSProperties >
  {
    top: "0",
    transition: "top 0.3s",
    position: "fixed",
  };
```

### On Scroll

```javascript
setNavBar({ top: "-75px", transition: "top 0.3s", position: "fixed" });


Customize by targeting the <nav> tag
```
