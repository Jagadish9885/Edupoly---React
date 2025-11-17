
import Courses from './components/Courses'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="border border-2 border-success p-2">
      <NavBar></NavBar>
      <div className="border border-2 d-flex flex-wrap m-2 p-2">
      <Courses price="20000" trainer="hari" hours="30">React</Courses>
      <Courses price="10000" trainer="anil" hours="20">Angular</Courses>
      <Courses price="30000" trainer="madhav" hours="40">NodeJs</Courses>
      <Courses price="15000" trainer="hari" hours="35">ExpressJs</Courses>
      <Courses price="20000" trainer="jagadish" hours="25">MERN</Courses>
      <Courses price="25000" trainer="sethu" hours="30">MEAN</Courses>
      <Courses price="28500" trainer="sai" hours="15">ReactJs FullStack with GenAI</Courses>
      <Courses price="32000" trainer="ram" hours="18">AngularJs FullStack with GenAI</Courses>
      <Courses price="18500" trainer="anjan" hours="38">Gen AI</Courses>
      <Courses price="16000" trainer="shiva" hours="30">Java</Courses>
      <Courses price="17500" trainer="mani" hours="22">AWS</Courses>
      <Courses price="22000" trainer="deep" hours="28">Dev Ops</Courses>
      </div>
    </div>
  )
}

export default App
