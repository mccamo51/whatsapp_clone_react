import { Avatar } from "@mui/material";
import { MoreVert, SearchOutlined } from "@mui/icons-material";
import IconButtonElement from "./IconButton";
function Chat() {
  return (
    <div className='flex flex-[0.7] flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between p-4 bg-gray-100'>
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
      <div className="bg-chat-iamge flex-1 bg-no-repeat bg-center bg-cover overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        <p className="relative text-[14px] bg-white px-2 py-1  w-[fit-content] m-3 rounded-lg text-gray-500">
          Call me
        </p>
      </div>
      

    </div>
  )
}

export default Chat