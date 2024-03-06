
import News from '../model/news.js';


export const getNews = async (request, response) => {
    try {
         
        let data = await News.find({});
      
        response.status(200).json(data);
    } catch (error) {
      
        response.status(500).json({msg : data.msg});
    }
}