import style from  "./App.module.css"
import "./global.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const users = [
  { id: 1,
    avatarUrl: "https://github.com/diwberg.png",
    name: "Diwberg de Andrade",
    role: "Software Engineer"},

  { id: 2,
    avatarUrl: "https://github.com/diwberg.png",
    name: "Amandha de Andrade",
    role: "QA Engineer"}
]


const posts = [
  {
    id: 1,
    author: users[0],
    content: [
      {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "link", text: "#Link",},
    {type: "link", text: "#React",},
    {type: "link", text: "#Quality",},
    {type: "link", text: "#Quality",},
    {type: "link", text: "#Quality",},

  ],
    publish: new Date("2023-05-19 23:00:00")
  },
  {
    id: 2,
    author: users[1],
    content: [
      {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "link", text: "#devReact"},
    {type: "link", text: "#devQuality"},
    {type: "link", text: "#fullStack"},
  ],
    publish: new Date("2023-05-20 09:00:00")
  },

]

export function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
      <Sidebar user={users[0]} />
      <main>
        {posts.map((post,index) =>{
          return (
          <Post 
            key={index}
            author={post.author}
            content={post.content}
            publish={post.publish}
          />

          )
        })}

      </main>
      </div>
    </>
  )
}

