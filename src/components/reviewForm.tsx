import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from "react-icons/bs"

type ReviewFormProps = {
  data: {
    review: string,
    comment: string,
  },
  updateFielHandler: (key: string, value: string) => void
}

export function ReviewForm({data, updateFielHandler}: ReviewFormProps) {
  return(
    <div className="size-96">
       <div className="mt-16 mb-10 flex justify-between">
        <label className="max-w-4 flex items-center  flex-col space-y-3 cursor-pointer">
          <input 
            className="appearance-none hidden peer " 
            type="radio" 
            name="review" 
            value="unsatisfied" 
            checked={data.review === "unsatisfied"} 
            onChange={(e)=> updateFielHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill className="size-10 peer-checked:text-red-500 text-black"/>
          <p className="text-slate-400">Insatisfeito</p>
        </label>
        <label className="max-w-4 flex items-center flex-col space-y-3 cursor-pointer">
          <input 
            className="appearance-none hidden peer" 
            type="radio" 
            name="review" 
            value="neutral" 
            checked={data.review === "neutral"}
            onChange={(e)=> updateFielHandler("review", e.target.value)}  
            required
          />
          <BsFillEmojiNeutralFill  className="size-10 peer-checked:text-orange-500 text-black"/>
          <p className="text-slate-400">Neutro</p>
        </label>
        <label className="max-w-4 flex items-center flex-col space-y-3 cursor-pointer">
          <input 
            className="appearance-none hidden peer" 
            type="radio" 
            name="review" 
            value="good" 
            checked={data.review === "good"}
            onChange={(e)=> updateFielHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiSmileFill className="size-10 peer-checked:text-yellow-500 text-black"/>
          <p className="text-slate-400">Satisfeito</p>
        </label>
        <label className="max-w-4 flex items-center flex-col space-y-3 cursor-pointer">
          <input 
            className="appearance-none hidden peer" 
            type="radio" 
            name="review" 
            value="excelent"  
            checked={data.review === "excelent"}
            onChange={(e)=> updateFielHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiHeartEyesFill className="size-10 peer-checked:text-emerald-500 text-black"/>
          <p className="text-slate-400">Excelente</p>
        </label>
       </div>

       <div className="flex flex-col w-full ">
        <label className="text-2xl mb-2">Escreva um Comentário:</label>
        <textarea 
        className=" outline-none shadow-lg shadow-black w-full h-32 rounded-md p-3 text-lg text-black"
        name="comment" 
        value={data.comment || ""}       
        placeholder="Conte como foi a sua experiência com o produto"
        required

        onChange={(e)=>updateFielHandler("comment", e.target.value)}
        >

        </textarea>
       </div>
    </div>
  )
}