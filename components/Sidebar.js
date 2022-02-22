import {
  DonutLarge,
  Message,
  MoreVert,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import IconButtonElement from "./IconButton";
import SideBarSearch from "./Search";

function Sidebar() {
  return (
    <div className="flex flex-col flex-[0.3] bg-white">
      {/* header */}
      <div className="flex items-center justify-between p-4 border-r border-gray-300 bg-gray-100">
        <div>
          <Avatar
            className="text-[30px]"
            src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          />
        </div>
        <div className="min-w-[20px] flex items-center justify-between">
          <IconButtonElement icon={<DonutLarge />} />
          <IconButtonElement icon={<Message />} />
          <IconButtonElement icon={<MoreVert />} />
        </div>
      </div>

      {/* search */}
      <SideBarSearch />

      {/* chat content */}
      <div className="bg-red-400 flex-1 mt-1">

      </div>
    </div>
  );
}

export default Sidebar;
