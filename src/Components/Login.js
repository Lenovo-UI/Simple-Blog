import { signInWithPopup } from "firebase/auth";
import { auth, provider} from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({setAuth}) => {
  const navigate = useNavigate();

  const LoginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true); //ローカルストレージに状態保存
      setAuth(true); //ログイン状態に変更
      navigate("/"); //初期ページを表示
    });
  }

  return (
    <div>
      <p>ログイン</p>
      <button
        className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
        onClick={LoginWithGoogle}>Googleでログイン
      </button>
    </div>
  )
}
