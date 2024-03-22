import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { UserForm } from "./components/userForm"
import { Thanks } from "./components/thanks"
import { ReviewForm } from "./components/reviewForm"
import { useForm } from "./hooks/userForm"
import { Steps } from "./components/steps"
import { useState } from "react"


type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}

export function App() {
  const formTemplate: FormFields = {
    name: "",
    email: "",
    review: "",
    comment: ""
  }

  const [data, setData] = useState(formTemplate)



  
  const updateFielHandler = (key: string, value: string) => {

    setData((prev) => {
      return {...prev, [key]: value}
    })

  }

  const formComponents = [
    <UserForm data={data} updateFielHandler={updateFielHandler}/>,
    <ReviewForm/>,
    <Thanks />
  ]

  const { currentStep, currentCopoment, changeStep} = useForm(formComponents)



  

  return(
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-4xl font-semibold">Deixe sua avaliação</h2>
        <p className="text-white/60 text-xl">Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="shadow-lg shadow-black rounded-md w-[800px] flex flex-col items-center bg-slate-950/30">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div>
            {currentCopoment}
          </div>
          <div className="flex gap-5 mb-5 items-center justify-center">
            <button
              type="button" 
              onClick={() => changeStep(currentStep -1)}
              className="flex items-center justify-center hover:bg-emerald-500 shadow-md shadow-black rounded-md px-8 py-3 text-lg bg-slate-950/50">
              <GrFormPrevious/>
              <span>Voltar</span>
              </button>
            <button 
              type="submit"
              className="flex items-center justify-center hover:bg-emerald-500 shadow-md shadow-black rounded-md px-6 py-3 text-lg bg-slate-950/50">
              <span>Avançar</span>
              <GrFormNext/>
              </button>
          </div>
        </form>
      </div>

    </div>
  )
  
}


