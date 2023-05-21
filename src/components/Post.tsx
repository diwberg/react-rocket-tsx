import style from '../components/Post.module.css';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { FaCommentAlt } from "react-icons/fa"

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Author {
        avatarUrl: string,
        name: string,
        role: string
}

interface Content {
    type: string,
    text: string
}

interface PostProps {
    id?: number,
    author: Author,
    content: Content[],
    publish: Date;


}

export function Post({ author, content, publish }: PostProps){
    //console.log(props)
    const publishPtBr = format(publish, "dd 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR,})
    const publishDateUntilNow = formatDistanceToNow(publish, {
        locale: ptBR,
        addSuffix: true,
    })
    const [ newCommentText, setNewCommentText ] = useState('')

    const [ comments, setComments ] = useState([''])

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange
    (event: ChangeEvent<HTMLTextAreaElement>)
    {
        event.target.setCustomValidity('')

        setNewCommentText(event.target.value)
    }


    function handleNewCommentInvalid
    (event: InvalidEvent<HTMLTextAreaElement>)
    {
        event.target.setCustomValidity("Você não pode fazer comentários varios")

    }

    function deleteComment(commentToDelete: number){
        //console.log(commentToDelete)
        const commentsWithoutDeleted = comments.filter((comment,index) => {
            return index != commentToDelete;
        })

        setComments(commentsWithoutDeleted);
    }

    const isNewCommentEmpty = newCommentText.length == 0
    
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar className="avatarBiggest" src={author.avatarUrl} title={author.name} alt='Profile-Post' />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                title={publishPtBr} 
                dateTime={publish.toISOString()}>
                    Públicado {publishDateUntilNow}
                </time>
            </header>

            <div className={style.content}>
                {content.map((list,index) => {
                    if(list.type == "paragraphy"){
                        return <p key={index}>{list.text}</p>
                    }else{
                        return (
                        <span key={index} className={style.hashs}>
                            <a key={index} href="#">{list.text}</a>
                        </span>
                        )
                    }
                })}

            </div>

            <form className={style.commentForm} onSubmit={handleCreateNewComment}>

            <FaCommentAlt className={style.icon} size={20} title="Deixe seu feedback" />

                <textarea
                name='comment'
                onChange={handleNewCommentChange}
                value={newCommentText}
                placeholder="Deixe seu comentário"
                onInvalid={handleNewCommentInvalid}
                required
                 />
                <footer>
                 <button name='posted' type="submit" disabled={isNewCommentEmpty}>Públicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
            {comments.map((comment,index) => {
                    return <Comment key={index} 
                    index={index}
                    publish={new Date(Date.now())}
                    author="Diwberg de Andrade" 
                    content={comment}
                    deleteComment={deleteComment}
                    />
            })}

            </div>
        </article>
    )
}