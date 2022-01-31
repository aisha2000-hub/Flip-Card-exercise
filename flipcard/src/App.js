
import Flipcard from "./components/flipcard";
import './App.css';

function App() {
  return (
    <div className="App">
     <Flipcard 
      name="John Doe"
       job="Architect & Engineer"
        text="We love that guy!"
        avatar="images.jpeg"
        />

     <Flipcard 
      name="Emily Pitt "
       job="Webdeveloper & Designer"
        text="We love that guy!"
         avatar="images.png"
         />
    </div>
  );
}


export default App;
