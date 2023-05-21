import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css"
import { FaEdit } from "react-icons/fa";

interface User{
    id: number;
    avatarUrl: string;
    name: string;
    role: string;

}

interface SidebarProps{
    user: User
}

export function Sidebar({ user }: SidebarProps){

    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://w0.peakpx.com/wallpaper/630/876/HD-wallpaper-tetris-art-3d-cgi-abstract.jpg"  />
            <div className={style.profile}>
                <Avatar 
                src={user.avatarUrl} 
                className ="avatar"
                title = {user.name}
                alt = "Profile"
                 />
                <strong>{user.name}</strong>
                <span>{user.role}</span>
            </div>
            <footer>
                <a href="#">
                <FaEdit size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}