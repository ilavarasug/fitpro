
import React,{JSX,useState} from 'react'
import { TrainerType } from './App'
const MainContent:React.FC<TrainerType> = ({trainer}:TrainerType):JSX.Element => {
    const[count,setcount]=useState<number>(1)
  return (
    <div>
    <p>{trainer.trainerName} TrainerNumber<span>{count}</span></p>
    <p>{trainer.tagName}</p>
</div>
  )
}
export default MainContent