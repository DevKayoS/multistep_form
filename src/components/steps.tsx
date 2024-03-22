import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

type stepsProps = {
  currentStep: number;
}

export function Steps({currentStep}: stepsProps){
  return(
    <div className='flex w-3/4 items-center justify-center mt-8 gap-2'>
      <div className={`flex flex-col items-center text-2xl  text-emerald-500 font-bold `}>
        <AiOutlineUser className='size-10'/>
        <p>Identificação</p>
      </div>
      <div className={` ${currentStep >=1 ? 'h-px rounded-full bg-emerald-500 w-1/2' : 'h-px rounded-full bg-slate-50 w-1/2' }`} />
      <div className={` ${currentStep >=1 ? " flex flex-col items-center text-2xl font-bold text-emerald-500" : "flex flex-col items-center text-xl"}`}>
        <AiOutlineStar className={`${currentStep >= 1 ? "size-10": ""}`}/>
        <p>Avaliação</p>
      </div>
      <div className={` ${currentStep >=2 ? 'h-px rounded-full bg-emerald-500 w-1/2' : 'h-px rounded-full bg-slate-50 w-1/2' }`} />
      <div className={` ${currentStep >=2 ? " flex flex-col items-center text-2xl font-bold text-emerald-500" : "flex flex-col items-center text-xl"}`}>
        <FiSend className={`${currentStep >= 2 ? "size-10": ""}`}/>
        <p>Envio</p>
      </div>
    </div>
  )
}