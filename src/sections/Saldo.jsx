import React from 'react'

const Saldo = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white p-5 shadow-lg rounded-lg">
            <p className="text-xl font-bold mb-5">Saldo: EUR ?</p>
            <div className="flex gap-4">
              <div className="bg-green-300 p-5 rounded-lg">Eingänge: EUR ?</div>
              <div className="bg-red-300 p-5 rounded-lg">Ausgänge: EUR ?</div>
            </div>
          </div>
    </div>
  )
}

export default Saldo
