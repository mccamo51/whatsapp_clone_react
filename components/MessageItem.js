import React from "react";

function MessageItem({message, time, reciept}) {
  return (
    <div className="bg-chat-iamge flex-1 bg-no-repeat bg-center bg-cover overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
      <p className={`relative text-[14px] bg-white px-2 py-1  w-[fit-content] m-3 rounded-lg text-gray-500 
      
       
        ${(reciept && `ml-auto before:rotate-45 before:absolute before:bottom-3 before:right-[-5px] before:w-[10px] before:h-[10px] 
        before:bg-messageSentColor bg-messageSentColor`)}
     

      `}>
       {message} <span className="text-[7px] text-gray-400">{time}</span>
      </p>
    </div>
  );
}

export default MessageItem;
