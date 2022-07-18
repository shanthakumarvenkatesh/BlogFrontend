import React, {useEffect, useState} from 'react'
import Card from '../Component/Card'

export const Technology = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
      
      const url ="https://blog----backend.herokuapp.com/api/tech";
      fetch(url).then(res => res.json())
          .then(res => setData(res)  )
  },[])
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>

            <div className="main__container">
            <div className='rightbar'>
                  {
                    data.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 

                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      fulldescription = {n.description}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="advertisement">
            <img
              id="adv"
              src="https://roaring-seahorse-2b27be.netlify.app/static/media/ad1.5cf42eeacf2348cc502d.png"
              alt=""
            />
          </div>
            </div>
    </div>
  )
}

export default Technology