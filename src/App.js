import logo from './logo.svg';
import './App.css';
import FormComponent from './components/Form'

function App() {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className="App">

      <div className="wrapper">
        <h3 className="title">
          Login
        </h3>
        <FormComponent onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
