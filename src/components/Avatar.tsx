import style from "./Avatar.module.css"
import { ImgHTMLAttributes } from "react"


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{


}
export function Avatar({ className = "avatar", ...props}: AvatarProps) {
    return (
            <img className={style[className]} {...props}/>
    )
}