
import './App.css';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  return (
    <body>
      <Title 
      text="Títle wiht uppercase and add color."
      color="red" />
      <Button label="Baixar CV"/>
    </body>
  );
}

export default App;
