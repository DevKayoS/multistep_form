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
    <div>
       <div>
        <label>
          <input type="radio" name="review" value="unsatisfied"  required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
       </div>
    </div>
  )
}