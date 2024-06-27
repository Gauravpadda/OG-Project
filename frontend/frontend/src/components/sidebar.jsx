// import {
//     Card,
//     Typography,
//     List,
//     ListItem,
//     ListItemPrefix,
//     ListItemSuffix,
//     Chip,
//   } from "@material-tailwind/react";
//   import {
//     PresentationChartBarIcon,
//     ShoppingBagIcon,
//     UserCircleIcon,
//     Cog6ToothIcon,
//     InboxIcon,
//     PowerIcon,
//   } from "@heroicons/react/24/solid";

//   const Sidebar=()=> {
//     return (
//       <div className="flex-row">
//         <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col dark:bg-gray-800 text-white">
//         <div className="mb-2 p-4">
//           <Typography variant="h5" color="blue-gray">
//             Other Courses you might be interested in
//           </Typography>
//         </div>
//         <List className="flex-1 flex flex-col space-y-4">
//           <ListItem >
//             <ListItemPrefix>
//               <PresentationChartBarIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             Dashboard
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <ShoppingBagIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             E-Commerce
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <InboxIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             Inbox
//             <ListItemSuffix>
//               <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
//             </ListItemSuffix>
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <UserCircleIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             Profile
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <Cog6ToothIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             Settings
//           </ListItem>
//           <ListItem>
//             <ListItemPrefix>
//               <PowerIcon className="h-5 w-5" />
//             </ListItemPrefix>
//             Log Out
//           </ListItem>
//         </List>
//       </Card>
//       </div>

//     );
//   }

//   export default Sidebar;

import { React, useState } from "react";
import menu_icon from "../assets/burger-menu.png"
import Button from "./Button/Button";
const Sidebar = () => {
  const [extended, setExtended] = useState(true)
  return (
    <>
    <div className="flex mt-4 ml-6 ">
        <img onClick={() => setExtended(!extended)} src={menu_icon} alt="" className="w-8 h-8 cursor-pointer hover:bg-slate-200 rounded-full" />
      </div>
    <div className={ `bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex flex-col bg-slate-300 justify-between ${extended?"w-60": "w-0"} h-screen`}>
      
      <div
        className={`transition-transform duration-300 ease-in-out ${extended ? "translate-x-0" : "-translate-x-full"
          } bg-gradient-to-r from-blue-300 to-pink-500 bg-clip-text text-transparent w-60 h-full rounded-lg p-2`}
      >
        <p className="hover:bg-slate-200 hover:text-black py-5 pl-2 text-3xl rounded-lg mt-10">
          OTHER RELATED COURSES
        </p>
        <p className="hover:bg-slate-200 hover:text-black p-2 rounded-lg cursor-pointer">
          Operating system
        </p>
        <p className="hover:bg-slate-200 hover:text-black p-2 rounded-lg cursor-pointer">
          Computer Networks
        </p>
        <p className="hover:bg-slate-200 hover:text-black p-2 rounded-lg cursor-pointer">
          Machine Learning
        </p>
      </div>

      
    </div>
    </>
    
  );
};
export default Sidebar;