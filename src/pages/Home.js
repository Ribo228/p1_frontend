const Home =() => {
    return (
        <>
        <h1>Our weapon</h1>
        <ul className="productBox">
            <li>
                <a href = "/product/4" className="productLink"> <img className="productImage" src={require('../assets/images/ra_ax_1.png')} alt="racket1"/></a>                
                <br /> <a href="/product/4" className = "productLink"> Racket No 1 </a>
                <br />

                <a href = "/product/5" className="productLink"> <img className="productImage" src={require('../assets/images/ra_ax_2.png')} alt="racket2"/></a>
                <br /> <a href="/product/5" className = "productLink"> Racket No 2 </a>

            </li>
        </ul>
        </>

    )
}

export default Home
