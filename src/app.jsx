import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list'



function App() {

  const [videos, setVideos] = useState([]);


  useEffect(()=> {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'  //  옵션
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCmMTOqH4nK04LI2eU09jHdnN1s2e_1h3I", requestOptions)
      .then(res =>  res.json())  //정상으로 받으면 텍스트로 변환
      .then(result => setVideos(result.items))  //변환 텍스트를 출력 
      .catch(err => console.log('err', err));


  },[])

  return (
   <>
   <VideoList videos={videos} />
   </>
  );
}

export default App;
