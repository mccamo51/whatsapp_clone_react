import { SearchOutlined } from "@mui/icons-material";

function SideBarSearch() {
  return <div className="flex items-center p-[8px] bg-white border-b">
        <div className="flex items-center  bg-serachBG w-full p-[5px] rounded-lg">

        <SearchOutlined sx={{ fontSize: 18 }} className="text-gray-500"/>
        <input placeholder="Search or start a new chat" className="bg-serachBG text-sm border-none outline-none ml-1 text-gray-700">
        </input>
        </div>
      </div>;
}

export default SideBarSearch;
