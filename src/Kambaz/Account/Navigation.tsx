import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
   const { currentUser } = useSelector((state: any) => state.accountReducer);
   const { pathname } = useLocation();
   const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation"
    style={{ width: 120 }} 
    className="list-group">
      {!currentUser && (
        <>
          <Link to="/Kambaz/Account/Signin" id="wd-account-link"
             className="text-black fw-bold text-start w-100 ps-2 border-start border-4 border-black text-decoration-none">
             Signin </Link>
          <Link to="/Kambaz/Account/Signup" id="wd-dashboard-link"
              className="text-danger fw-bold text-start w-100 ps-2 text-decoration-none">
             Signup </Link>
        </>
      )}
      {currentUser && (
        <Link to="/Kambaz/Account/Profile" id="wd-course-link"
               className="text-danger fw-bold text-start w-100 ps-2 text-decoration-none">
           Profile </Link>
      )}
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}