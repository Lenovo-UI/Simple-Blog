import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faHouse, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

//ナビゲーションメニューのスタイル
const linkClassName =
  "text-white no-underline transition-all duration-300 hover:text-[#5f9ea0]";

export const Navbar = ({isAuth}) => {
  return (
    <nav className= "bg-[#cb8454] flex justify-center items-center gap-[45px] h-[50px]">
      <Link className={linkClassName} to="/">
        <FontAwesomeIcon icon={faHouse} className="mr-[5px]" />
        ホーム
      </Link>
      <Link className={linkClassName} to="/CreatePost">
        <FontAwesomeIcon icon={faFilePen} className="mr-[5px]" />
        記事投稿
      </Link>
      {
        !isAuth ? (<Link className={linkClassName} to="/Login">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-[5px]" />
        ログイン
        </Link>) : (<Link className={linkClassName} to="/Logout">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="mr-[5px]" />
        ログアウト
        </Link> )
      }
    </nav>
  )
}
