import React,{useEffect} from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SKillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import "./App.css"
import ExperienceContainer from './components/Experience/ExperienceContainer'
import Contact from './components/Contact/Contact'
import Info from './components/Contact/Info'


function App() {
  useEffect(() => {
    document.title = 'Thinesh Portfolio Hub';
  }, []);
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Info/>
      <Contact/>
    </div>
  )
}

export default App