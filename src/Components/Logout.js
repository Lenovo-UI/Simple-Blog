import { signOut } from "firebase/auth";
import { auth} from "../firebase";
import { useNavigate } from "react-router-dom";

export const Logout = ({setAuth}) => {
  const navigate = useNavigate();

  const LogoutWithGoogle = () => {
    //ログアウト
    signOut(auth).then((result) => {
      localStorage.clear(); //ローカルストレージを初期化
      setAuth(false); //ログアウト状態に変更
      navigate("/login"); //ログインページを表示
    });
  }

  return (
    <div>
      <p>ログアウト</p>
      <button
        className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
        onClick={LogoutWithGoogle}>ログアウトする
      </button>
    </div>
  )
}
