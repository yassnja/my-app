import './App.css';
import Footer from './Footer';
import Card from './Card';
import Header from './Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Card car = "BMW"></Card>
        <Card></Card>
        <Card></Card>
        <Footer></Footer>
    </div>
  );
}

export default App;
