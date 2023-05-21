import { FaTrashAlt, FaRegThumbsUp } from "react-icons/fa";
import style from "./Comment.module.css"
import { Avatar } from "./Avatar";
import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";


interface CommentProps{
    index: number,
    content: string,
    publish: Date,
    author: string,
    deleteComment: (comment: number) => void;
}

export function Comment({index, content, publish, author, deleteComment}: CommentProps) {
    function handleDeleteComment(){
        deleteComment(index)
    }

    const [ countLikes, setCountLikes ] = useState(0)

    function handleLikeComment(){
        setCountLikes((state) => {
            return state + 1
        })
    }

    
    const publishPtBr = format(publish, "dd 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR,})

    const publishDateUntilNow = formatDistanceToNow(publish, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <div className={style.comment}>
            <Avatar className="avatarComment" src="https://github.com/diwberg.png" alt="Profile" title={author} />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>{author}</strong>
                            <time
                                title={publishPtBr}
                                dateTime={publish.toDateString()}>
                                {publishDateUntilNow}
                            </time>
                        </div>

                        <button 
                        title="Deletar comentário"
                        onClick={handleDeleteComment}
                        >
                            <FaTrashAlt size={20} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                    <FaRegThumbsUp size={20} />Gostei <span>{countLikes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
