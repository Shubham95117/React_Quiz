
import Quiz from './Quiz'
import { useUserAuth } from '../context/UserAuthContext';
function Home() {
  const {logOut} =useUserAuth();
  const handleLogout=async()=>{
      try{
          await logOut();
      }
      catch(err){
          console.log(err.message)
      }
  }

  return (
    <>
      {/* <div className='p-4 box mt-3 text-center'>
        Hello Welcome <br />
        {User&& User.email}
    </div>
      <div className='d-grid gap-2'>
        <Button variant='primary' onClick={handleLogout}>Log Out</Button>
    </div> */}
      <Quiz/>
    <button className='loGOut ' onClick={handleLogout}>LogOut</button>
    </>
  );
}

export default Home;
