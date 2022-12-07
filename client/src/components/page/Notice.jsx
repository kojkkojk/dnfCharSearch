import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notice() {
   const [datas, setDatas] = useState([])
   const shootApi = async () => {
      await axios.get('/api/test').then(res => {
         console.log(res);
         let data = res.data
         if (!data) {
            alert("API 서버에 문제가 있습니다.")
         } else {
            setDatas(data)
         }
      }).catch(err => console.log(err))
   }
   useEffect(() => {
      shootApi()
   }, [])

   return (
      <div className='ht5949'>
         <div className='uobpoecm223'>
            <div className='fe820dc'>업데이트</div>
            {datas.length > 0 ?
               datas.map((data, index) => (
                  <div className='trtrtr' key={index}>
                     <div>
                        <a href={data.link} target={"_blank"} rel="noopener noreferrer">
                           <img src={data.img} alt={data.title} />
                        </a>
                     </div>
                     <div>
                        <span><a href={data.link} target={"_blank"} rel="noopener noreferrer">{data.title}</a></span>
                        <span>{data.date}</span>
                     </div>
                  </div>
               ))
               : ""}
         </div>
      </div>
   )
}

export default Notice