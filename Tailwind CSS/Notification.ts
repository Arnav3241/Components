import React from "react";

const Notification = () => {
  return (
    <React.Fragment>
      <div class="absolute bottom-0 right-0 m-6 h-44 w-96 rounded-xl bg-slate-800 p-0 transition ease-in-out hover:-translate-y-1 hover:scale-105">
        <div class="absolute right-0 mx-5 mt-4 font-semibold text-white">❌</div>
        <div class="title m-4 text-2xl text-gray-200">Notification Title</div>
        <div class="subtitle mx-4 text-gray-300">Hello World this Is Me Arnav Singh And Welcome To my Website Arnav.vecel.app</div>
        <div class="absolute right-0">
          <button class="m-1 mr-4 w-20 rounded-lg bg-gray-900 px-3 py-2 text-white">Exit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Notification;
