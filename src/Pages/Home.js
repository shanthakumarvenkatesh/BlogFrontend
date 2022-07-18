import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://blog----backend.herokuapp.com/api/home";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            
          </div>
          <div className="home__sec">
            <Link to="/fitness">
              {" "}
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/health_tips.png?huW64SShGPQ0UrKdnvf0X_u9dgDIP3sZ&size=770:433"
                alt="not foun"
              />
            </Link>
          </div>
        </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="advertisement">
            <img
              id="adv"
              src="https://roaring-seahorse-2b27be.netlify.app/static/media/ad1.5cf42eeacf2348cc502d.png"
              alt=""
            />
          </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>

        <div className="home__left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;