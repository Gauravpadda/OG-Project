// import { useNavigate, Link } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const authStatus = false; // Define authStatus here or pass it as a prop

//   const navItems = [
//     // {
//     //   name: 'Home',
//     //   slug: "/",
//     //   active: true
//     // },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//   ];

//   return (
//     <header className='py-3 shadow bg-gray-500'>
//       <nav className='flex'>
//         <div className='mr-4'>
//           {/* <Link to='/'>
//            <Logo width='70px' /> 
//           </Link> */}
//         </div>
//         <ul className='flex ml-auto'>
//           {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                   onClick={() => navigate(item.slug)}
//                   className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                 >
//                   {item.name}
//                 </button>
//               </li>
//             ) : null
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
