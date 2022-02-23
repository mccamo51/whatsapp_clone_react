import { Avatar } from "@mui/material";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@mui/icons-material";
import IconButtonElement from "./IconButton";
import MessageItem from "./MessageItem";
function Chat() {
  return (
    <div className="flex flex-[0.7] flex-shrink flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center">
          <Avatar
            className="text-[30px] cursor-pointer"
            src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          />
          <h2 className="ml-3 font-bold">Kwame Tynx</h2>
        </div>
        <div className="min-w-[20px] flex items-center justify-between">
          <IconButtonElement icon={<SearchOutlined />} />
          <IconButtonElement icon={<MoreVert />} />
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <MessageItem message="Hi" time="10:30" reciept={true} />
        <MessageItem message="Hello" time="10:30" reciept={false} />
        <MessageItem message="How are you" time="10:30" reciept={true} />
        <MessageItem message="I'm fine" time="10:30" reciept={false} />
        <MessageItem message="You?" time="10:30" reciept={true} />
        <MessageItem message="I'm good" time="10:30" reciept={false} />
        <MessageItem message="Thank You" time="10:30" reciept={true} />
        <MessageItem message="Thank You" time="10:30" reciept={false} />
        <MessageItem message="Thank You" time="10:30" reciept={true} />
        <MessageItem message="Thank You" time="10:30" reciept={false} />
        <MessageItem message="Thank You" time="10:30" reciept={true} />
      </div>

      {/* Footers */}

      <div className="flex">
        <IconButtonElement icon= {<InsertEmoticon/>}/>
        <IconButtonElement icon= {<AttachFile/>}/>
        <input placeholder="Type message here" className="border-none bg-white text-sm outline-none m-1 text-gray-700 px-1 rounded-md w-full"></input>
        <IconButtonElement icon= {<Mic/>}/>

      </div>


    </div>
  );
}

export default Chat;
