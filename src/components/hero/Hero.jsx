import "./Hero.scss"

function Hero({title, desc, image}){
    return <div style={{background: `url(${image}) no-repeat center/cover` }} className="hero container">
        <div className="hero__start">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <button className="hero__btn">Buy Now</button>
    </div>
}

export default Hero;