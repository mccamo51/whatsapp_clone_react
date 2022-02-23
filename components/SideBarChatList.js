import { useEffect, useState} from 'react';
import { Avatar } from '@mui/material';

function SideBarChatList({message, name}) {
    const [seed, setSeed] = useState(0);
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 500))
    },[])
  return (<div className="flex border-b cursor-pointer p-4 hover:bg-appBG duration-150 ease-in-out">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <div className="ml-2">
            <h3 className="text-[15px] font-bold text-gray-500">{ name }</h3>
            <p className="text-[12px] text-gray-700">{message}</p>
          </div>
        </div>
  )
}

export default SideBarChatList