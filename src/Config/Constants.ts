
export const NAV_BAR :{Img:string,Title:string,Sub_Title:string,} = {
  Img: "../../Assets/logo.jpg",
  Title: "Alumni app",
  Sub_Title: "React Project",
};
export const HOME_PAGE : string = "HomePage";
export const LOGIN : string = "Login";
export const SIGN_UP : string  = "Signup";
export const REGISTER : string = "Register";
export const SIGNUP_WITH_GMAIL : string = "Sign Up With Gmail";
export const SIGN_UP_INFO : string = "Please enter the details to get strated";
export const NAV_LINKS : ({label:string, id:string,path:string})[] = [
  {
    label: "Home",
    id: "home",
    path: "/",
  },
  {
    label: "Events",
    id: "event",
    path: "/event",
  },
  {
    label: "Chat",
    id: "chat",
    path: "/chat",
  },
  {
    label: "Signup",
    id: "signup",
    path: "/signup",
  },
  {
    label: "Login",
    id: "login",
    path: "/login",
  },
];
export const SIGNED_IN_NAV_LINKS : ({label:string, id:string,path:string})[] = [
  {
    label: "Home",
    id: "home",
    path: "/",
  },
  {
    label: "Events",
    id: "event",
    path: "/event",
  },
  {
    label: "Chat",
    id: "chat",
    path: "/chat",
  },
]