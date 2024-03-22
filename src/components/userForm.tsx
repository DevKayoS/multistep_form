type UserProps= {
 data: {
  name: string,
  email: string
 };
 updateFielHandler: (key: string, value: string) => void
}

export function UserForm({data, updateFielHandler}: UserProps) {
  return(
     <div className=" flex flex-col w-96 mt-16 h-96 space-y-8">
      <div className="flex flex-col p-2">
        <label className="text-2xl text-slate-300 font-semibold">Nome:</label>
        <input 
        className="p-3 rounded-md text-xl outline-none shadow-lg text-black shadow-black"
        type="text" 
        placeholder="Digite seu nome..."
        required 
        value={data.name || ""}
        onChange={(e) => updateFielHandler("name", e.target.value)}
        />
      </div>
      <div className="flex flex-col p-2">
        <label className="text-2xl text-slate-300 font-semibold">E-mail:</label>
        <input 
        className="p-3 rounded-md text-xl outline-none shadow-lg text-black shadow-black"
        type="email" 
        placeholder="Example@example.com.br" 
        required
        value={data.email || ""}
        onChange={(e) => updateFielHandler("email", e.target.value)}
        />
      </div>
     </div>
  )
}