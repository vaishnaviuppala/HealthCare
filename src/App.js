import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/SidebarComponent';
import MainDashboardComponent from './components/MainDashboardComponent';

function App() {
  return (
    <div className="App">
     <HeaderComponent></HeaderComponent>
     <SidebarComponent></SidebarComponent>
     {/* <MainDashboardComponent></MainDashboardComponent> */}
     
    </div>
  );
}

export default App;
