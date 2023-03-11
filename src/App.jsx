//import components and style
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import './styles/components/app.sass';

//portfolio section component
function App() {
  return (
    <div id="portfolio">
      <h1>Gustavo Victor</h1>
      <Sidebar />
      <MainSection />
    </div>
  )
};

export default App;
