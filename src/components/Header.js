import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      navigate("/error");
    }
  };
  return (
    <div className=" flex absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 justify-between ">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-10 h-10" src={user?.photoURL} alt="user image" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
