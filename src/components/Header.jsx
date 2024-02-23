import Menuitem from "./Menuitem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="">
      <div className="flex">
        <Menuitem title="HOME" address='/' Icon={AiFillHome} />
        <Menuitem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className=""></div>
    </div>
  );
}
