import React from 'react';

const Home = () => {
    return(
        <div>
            <div className = "subject">
                <h2>넷플릭스 인기 영화</h2>
                <h5>Popular movies on Netflix use movies recommender system</h5>
                <a href = "https://www.kaggle.com/datasets/narayan63/netflix-popular-movies-dataset">https://www.kaggle.com/datasets/narayan63/netflix-popular-movies-dataset</a>
            </div>
            <img className = "netfilx" src="image/dataset-cover.jpg"></img>
        </div>
    )
}
export default Home;