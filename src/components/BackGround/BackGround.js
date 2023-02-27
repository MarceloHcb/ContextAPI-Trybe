import useAuth from "../../hooks/useAuth";
import estrela from '../../assets/estrela.mp4'
import "./BackGround.css";
import Video from "../Video";

function BackGround() {
    const { user } = useAuth()  
  return (
    <>
      <Video background={estrela} id={"myVideo"}/>
      <div className="content">
        <h1>{user && user.email}</h1>
      </div>
    </>
  );
}

export default BackGround;
