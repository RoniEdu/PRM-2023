import { Box } from "@mui/material"
import HeaderProfile from "../../components/HeaderProfile"
import TopicList from "../../components/TopicList"
import { useEffect, useState } from "react"

function TopicPage() {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/profile').then(res => res.json())
    .then(data => {
        setProfile(data);}) 
  }, [])

    const topics = [
        {
            owner: { fullname: 'Cleiton' },
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id dicta vitae, accusamus eos optio tempore temporibus fugit, impedit at vero qui delectus eligendi accusantium fugiat dignissimos? Cum, maiores expedita.',
            comments: 1,
            reposts: 1,
            likes: 30,
            createAt: '2023-08-12 19:30:53'
        },
        {
            owner: { fullname: 'Robertinho' },
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id dicta vitae, accusamus eos optio tempore temporibus fugit, impedit at vero qui delectus eligendi accusantium fugiat dignissimos? Cum, maiores expedita.',
            comments: 2,
            reposts: 0,
            likes: 8,
            createAt: '2023-08-11 19:30:53'
        },
        {
            owner: { fullname: 'Felipe' },
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id dicta vitae, accusamus eos optio tempore temporibus fugit, impedit at vero qui delectus eligendi accusantium fugiat dignissimos? Cum, maiores expedita.',
            comments: 5,
            reposts: 3,
            likes: 20,
            createAt: '2023-4-30 19:30:53'
        },
        {
            owner: { fullname: 'Andre' },
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id dicta vitae, accusamus eos optio tempore temporibus fugit, impedit at vero qui delectus eligendi accusantium fugiat dignissimos? Cum, maiores expedita.',
            comments: 8,
            reposts: 4,
            likes: 15,
            createAt: '2023-9-15 19:30:53'
        },
        {
            owner: { fullname: 'Celso' },
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae id dicta vitae, accusamus eos optio tempore temporibus fugit, impedit at vero qui delectus eligendi accusantium fugiat dignissimos? Cum, maiores expedita.',
            comments: 6,
            reposts: 1,
            likes: 18,
            createAt: '2023-10-19 19:30:53'
        },
    ]



    return (
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />

            <TopicList items={topics}/>
        </Box>
    )
}

export default TopicPage