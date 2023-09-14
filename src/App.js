import './App.css';
import Acardion from "./components/Acardion";

function App({data}) {

  return (
    <div className="App">
        {
            data.map((item)=>{
                return(<Acardion  item={item}/> )
            })
        }

      {/*<Acardion />*/}
    </div>
  );
}

export default App;
