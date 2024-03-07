import { auth } from "../Config";

function UserProfile(user){
      // Sign out of firebase
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      alert("Do you want to signed out?");
    });
  };
    return(
        <>
        <div>
            <h1>Welcome. You are signed in</h1>
            <div>{user.displayName}</div>
            <div>{user.email}</div>
            <button
              onClick={signOut}
              className=" text-[15px] bg-blue-500 text-white py-[8px] px-[20px] rounded-[100px] w-full md:w-full m-auto mt-[10px] "
            >
              Log out
            </button>
          </div>
        </>
    )
}

export default UserProfile