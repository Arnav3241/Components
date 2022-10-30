import React from "react";

const RoundButtons = () => {
  return (
    <React.Fragment>
      <div class="flex h-screen w-screen flex-col items-center justify-evenly bg-[#111181]">
        <div class="flex h-52 w-[95%] items-center justify-evenly rounded-2xl bg-gray-900">
          <div class="flex h-32 w-32 items-center justify-center rounded-full bg-black shadow-lg shadow-yellow-600 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <p class="text-3xl text-yellow-500">Start</p>
          </div>
          <div class="flex h-32 w-32 items-center justify-center rounded-full bg-black shadow-lg shadow-yellow-600 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <p class="text-3xl text-yellow-500">Canvas</p>
          </div>
          <div class="flex h-32 w-32 items-center justify-center rounded-full bg-black shadow-lg shadow-yellow-600 transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <p class="text-3xl text-yellow-500">Exit</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RoundButtons
