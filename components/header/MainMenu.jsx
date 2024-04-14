import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";


const MainMenu = ({ style = "" }) => {

  const router = useRouter();
  const [error, setError] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const pathname = usePathname();


  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>

        <li className={pathname === "/home" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/gols" ? "current" : ""}>
          <Link href="/golf-list">Golfs</Link>
        </li>

        <li className={pathname === "/Tours" ? "current" : ""}>
          <Link href="/tour-list">Tours</Link>
        </li>
        <li className={pathname === "/activities" ? "current" : ""}>
          <Link href="/activity-list">Activities</Link>
        </li>
      
       {/* End pages items */}

       <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>    
      </ul>
    </nav>
  );
};

export default MainMenu;
