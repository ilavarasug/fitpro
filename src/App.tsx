import './App.css'
import Heading from './Heading'
import MainContent from './MainContent'

export interface TopPage{
  firstLine:String,phoneNumber:number
}
export interface Trainer{
  trainerName:string,tagName:string,fees?:number
}

export interface TrainerType{
  trainer:Trainer
}
function App() {
  const primarytrainer:Trainer={trainerName:'ila',tagName:'Mr.Coimbatore'}
  const personalTrainer:TrainerType={trainer:primarytrainer}
  return (
    <>
      <Heading firstLine={'24/7 fitness'} phoneNumber={123346789}></Heading>
      <MainContent trainer= {primarytrainer}></MainContent>
      {personalTrainer}
    </>
  )
}

export default App
