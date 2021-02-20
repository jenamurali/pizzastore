import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData, sortData, filterByType } from "./Redux/Action/Action";
import { PizzaList } from "./Component/pizzaList/pizzaList";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.pizzaReducer.data);
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
        <div className="sorting">
          <select className="form-select" onChange={(e) => dispatch(sortData(e.target.value))}>
            <option value="">Sort By...</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
          <select className="form-select" onChange={(e) => dispatch(filterByType(e.target.value))}>
            <option value="">Filter By...</option>
            <option value="true">Veg</option>
            <option value="false">Non-Veg</option>
          </select>
        </div>
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
