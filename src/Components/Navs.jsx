// import { Container, Nav, Navbar, Button } from "react-bootstrap";
// import LogoN from "../Assets/logo.png";
// import { useUserAuth } from "../context/UserAuthContext";
// // import { useState } from "react";
// import {Navigate} from 'react-router-dom'

// function Navs() {
//   // const[user,setUser]=useState(false)
//   const { User, logOut } = useUserAuth();
//   console.log(User);
//   const handleLogout = async () => {
//     try {
//       await logOut();
//     } catch (err) {
//       console.log(err.message);
//     }
//   };


//   if(!User){
//     return <Navigate to="/"/>
//     }
//   else {
//     return (
//       <>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#">
//             <img
//               src={LogoN}
//               width="100"
//               height="100"
//               className="d-inline-block align-top rounded"
//               alt="Logo"
//             />
//           </Navbar.Brand>
//           <Nav>
//             <Button onClick={handleLogout}>Logout</Button>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//     )
//   }

// }

// export default Navs;
