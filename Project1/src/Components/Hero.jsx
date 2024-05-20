const Hero = () =>{
    return(
        <main className = "Hero container">
            <div className="Hero-content">
                <h1> Hello yall</h1>
                <p>This is my first Try</p>
                <p>Wuhuuuuuuuuuuu</p>
                <div className = "Hero-button">
                    <button type="button">Shop Now</button>
                    <button className="secondary-btn">Categories</button>
                </div>
                <div className = "Shopping">
                    <p> Shop on this freaking store</p>
                </div>

                <div className = "brand-icons">
                    <img src ="\Imgs\OIP.jpeg" alt ="branded-logos"></img>
                </div>
            </div>

            <div className = "Hero-img" alt = "hero-image">
                <img src = "\Imgs\download.jpeg" />

            </div>
        </main>
    );
};

export default Hero;