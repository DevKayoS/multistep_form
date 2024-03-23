import { ReactElement } from "react"
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

interface ThanksProps {
  data: {
    name: string,
    review: string,
    comment: string
  }
}

type emojiObject ={
  unsatisfied: ReactElement,
  neutral: ReactElement,
  good: ReactElement,
  excelent: ReactElement
}

const emojiData: emojiObject ={
  unsatisfied: <BsFillEmojiFrownFill className=" size-6 text-red-500"/>,
  neutral: <BsFillEmojiNeutralFill className=" size-6 text-orange-500"/>,
  good: <BsFillEmojiSmileFill className=" size-6 text-yellow-500"/>,
  excelent: <BsFillEmojiHeartEyesFill className=" size-6 text-emerald-500"/>
}

export function Thanks({data}: ThanksProps){
  return(
    <div className="flex items-center justify-center m-auto flex-col space-y-3 ">
      <h2 className="font-bold text-3xl mt-5">Falta Pouco...</h2>
      <p className="w-3/4 text-xl text-center">
        A sua opnião é muito importante, em breve você receberá um cupom de 10% 
        de desconto para a sua próxima compra.
      </p>
      <p className="w-3/4 text-xl text-center">
        Para concluir sua avaliação clique no botão de Enviar abaixo.
      </p>
      <h3 className="font-bold text-2xl">Aqui está o resumo da sua avaliação Sr(a).{data.name}: </h3>
      <div className=" w-8/12 ">
        <p className="flex gap-2 text-left"> 
        <span className="font-bold text-xl">Satisfação com o produto:</span>
        {emojiData[data.review as keyof typeof emojiData]}  
        </p>
        <p className="flex gap-2 text-left text-xl mb-16">
          <span className="font-bold text-xl">
            Comentário:
          </span>
          {data.comment}
        </p>
      </div>
    </div>
  )
}