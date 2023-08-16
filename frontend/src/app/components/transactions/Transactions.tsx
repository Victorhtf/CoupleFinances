
const Transactions = () => {
  return (
    <div className="w-full h-60 p-4 rounded-lg h-28 border-zinc-900">
        <h1 className='flex text-white self-center justify-center font-bold text-white text-2xl m-4 pb-2 uppercase'>Transactions</h1>
        <div className="flex items-center justify-center gap-4 text-zinc-900">
          <div className="h-24 w-48 rounded-2xl bg-neutral-50 border-neutral-300 uppercase flex justify-center items-center flex-col">
            <h1 className='flex font-semibold'>Incomes</h1>
            <h1 className='flex '>R$ 28.989,98</h1>
          </div>
          <div className="h-24 w-48 rounded-2xl bg-neutral-50 border-neutral-300 uppercase flex justify-center items-center flex-col">
            <h1 className='flex font-semibold'>Expenses</h1>
            <h1 className='flex '>R$ 9.123,23</h1>
          </div>
            <div className="h-24 w-48 rounded-2xl bg-neutral-50 border-neutral-300 uppercase flex justify-center items-center flex-col">
              <h1 className='flex font-semibold'>Saldo</h1>
              <h1 className='flex '>R$ 9.123,23</h1>
            </div>
        </div>
        <div className=" mt-8 border-2 border-black rounded-3xl ">
          <div className="p-2 flex justify-around bg-zinc-50 border-b border-zinc-950 text-lg">
            <h2 className="font-semibold">Date</h2>
            <h2 className="font-semibold">Type</h2>
            <h2 className="font-semibold">Description</h2>
            <h2 className="font-semibold">Value</h2>
          </div>
          <div className="p-2 flex justify-around  border-b border-zinc-950 text-lg">
            <h2 className="font-medium text-base justify-self-center">23/01/2022</h2>
            <h2 className="font-medium text-base justify-self-center">Income</h2>
            <h2 className="font-medium text-base justify-self-center">Pró-labore</h2>
            <h2 className="font-medium text-base justify-self-center">R$23,988,87</h2>
          </div>
          <div className="p-2 flex justify-around border-b border-zinc-950 text-lg">
            <h2 className="font-medium text-base ">Date</h2>
            <h2 className="font-medium text-base">Type</h2>
            <h2 className="font-medium text-base">Description</h2>
            <h2 className="font-medium text-base">Value</h2>
          </div>
          <div className="p-2 flex justify-around text-lg">
            <h2 className="font-medium text-base">Date</h2>
            <h2 className="font-medium text-base">Type</h2>
            <h2 className="font-medium text-base">Description</h2>
            <h2 className="font-medium text-base">Value</h2>
          </div>
        </div> Criar grid
    </div>
  )
}

export default Transactions;