import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import Article from "./Article";
import { getNews } from "../service/api";


const Articles = () => {
    
    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    },[]);
  
    const dailyNews = async () => {
       let response = await getNews();
        console.log(response.data);
        setNews(response.data);
    }


  return (
    <Box>
    {
        news.map(article => (
            <Article article={article} />
        ))
    }
    </Box>
  )
}

export default Articles
