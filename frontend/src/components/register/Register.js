
import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:8000/register", user)
            .then( res => {
                alert("Account created succefully")
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }
return (
     
            <div className="register">
                {console.log("User", user)}
         <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <a href="#" class="brand-wrap">
                          ViVo Express
                        </a> 
                    </div>
                    <div class="col-xl-6 col-lg-5 col-md-6">
                        <form action="#" class="search-header">
                            <div class="input-group w-100">
                                <select class="custom-select border-right"  name="category_name">
                                        <option value="">All type</option><option value="codex">Special</option>
                                        <option value="comments">Only best</option>
                                        <option value="content">Latest</option>
                                </select>
                                <input type="text" class="form-control" placeholder="Search" />
                                
                                <div class="input-group-append">
                                  <button class="btn btn-primary" type="submit">
                                    <i class="fa fa-search"></i> Search
                                  </button>
                                </div>
                            </div>
                        </form> 
                    </div> 
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="widgets-wrap float-md-right">
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-user"></i>
                                        <span class="notify">3</span>
                                    </div>
                                    <small class="text"> My profile </small>
                                </a>
                            </div>
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-comment-dots"></i>
                                        <span class="notify">1</span>
                                    </div>
                                    <small class="text"> Message </small>
                                </a>
                            </div>
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-store"></i>
                                    </div>
                                    <small class="text"> Orders </small>
                                </a>
                            </div>
                            <div class="widget-header">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-shopping-cart"></i>
                                    </div>
                                    <small class="text"> Cart </small>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
            </div> 
        </section> 
        
        
        
        <nav class="navbar navbar-main navbar-expand-lg border-bottom">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                   
                    <div class="dropdown-menu dropdown-large">
                        <nav class="row">
                           
                        </nav> 
                    </div> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Categories</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Flash sale</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Freebies</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Get the app</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown">English</a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Russian</a>
                    <a class="dropdown-item" href="#">French</a>
                    <a class="dropdown-item" href="#">Spanish</a>
                    <a class="dropdown-item" href="#">Chinese</a>
                    </div>
                </li>
                </ul>
            </div> 
        </div> 
        </nav>
        
        </header> 
        
        
        <div class="container">
       
        <section class="section-main padding-y">
        <main class="card">
            <div class="card-body">
        
        <div class="row">
            <aside class="col-lg col-md-3 flex-lg-grow-0">
                <nav class="nav-home-aside">
                 
                </nav>
            </aside>
            <div class="col-md-9 col-xl-7 col-lg-7">
        
      
        <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
            <li data-target="#carousel1_indicator" data-slide-to="1"></li>
            <li data-target="#carousel1_indicator" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/images/banners/slide1.jpg" alt="First slide" /> 
            </div>
            <div class="carousel-item">
              <img src="assets/images/banners/slide2.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img src="assets/images/banners/slide3.jpg" alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> 
       
        
            </div> 
         
        </div> 
        
            </div> 
        </main> 
        </section>
        <section class="padding-bottom">
        
        <header class="section-heading heading-line">
            <h4 class="title-section text-uppercase">Register My Account</h4>
        </header>
        
        <div class="row">
            <div class="col-md-8">
        <div class="card-banner banner-quote overlay-gradient" style={{backgroundImage: "url('assets/images/banners/banner9.jpg')"}}>
          <div class="card-img-overlay white">
            <h3 class="card-title">Register this week get the Free Item biggest sale in world </h3>
            <p class="card-text" style={{maxWidth: '400px'}}>Enjoy Upto 80% Discount with AliExpress Coupon Code. Use Our Valid Promo Code & Save! Fashion Coupons. Best Offers. Electronics Promo. Get Seasonal Discounts. Upto 80% Savings.</p>
            <a href="" class="btn btn-primary rounded-pill">Learn more</a>
          </div>
        </div>
            </div>
            <div class="col-md-4">
                  {/* start the create account to register  */}
        
        <div class="card card-body">
            <h4 class="title py-3">Create An Account</h4>
           
                <div class="form-group">
                <label>Email Address*</label>
                    <input class="form-control" name="email" value={user.email} onChange={ handleChange } placeholder="Enter your Email" type="text" />
                </div>
                <div class="form-group">
                <label>Full Name*</label>
                    <input class="form-control" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } type="text" />
                </div>
                <div class="form-group">
                <label>Password*</label>
                    <input class="form-control" name="password" value={user.password}  onChange={ handleChange} placeholder="Enter your password" type="password" />
                </div>
                <div class="form-group">
                <label>Check Password</label>
                    <input class="form-control"  name="reEnterPassword" value={user.reEnterPassword}  onChange={ handleChange} placeholder="ReEnter your password" type="password" />
                </div>
                <div class="form-group">
                    <button class="btn btn-warning" onClick={register} >Register</button><br></br><br></br>
                    <h6 class="title-section text-uppercase">If You Have Account Login</h6>
                    <button class="btn btn-success" onClick={() => history.push("/login")}>Login</button>
                </div>
           
        </div>
          {/* end of the create account part  */}
            </div> 
        </div> 
        </section>
        
    
     
        <section  class="padding-bottom">
        
        <header class="section-heading heading-line">
            <h4 class="title-section text-uppercase">Choose region</h4>
        </header>
        
        <ul class="row mt-4">
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/CN.png" /> <span>China</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/DE.png" /> <span>Germany</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/AU.png" /> <span>Australia</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/RU.png" /> <span>Russia</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/IN.png" /> <span>India</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/GB.png" /> <span>England</span> </a></li>
            <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="assets/images/icons/flags/TR.png" /> <span>Turkey</span> </a></li>
        
        </ul>
        </section>
      
        
        <article class="my-4">
            <img src="assets/images/banners/ad-sm.png" class="w-100" />
        </article>
        </div>  
       
        
       
        <section class="section-subscribe padding-y-lg">
        <div class="container">
        
        <p class="pb-2 text-center text-white">Delivering the latest product trends and industry news straight to your inbox</p>
        
        <div class="row justify-content-md-center">
            <div class="col-lg-5 col-md-6">
        <form class="form-row">
                <div class="col-md-8 col-7">
                <input class="form-control border-0" placeholder="Your Email" type="email" />
                </div>
                <div class="col-md-4 col-5">
                <button type="submit" class="btn btn-block btn-warning"> <i class="fa fa-envelope"></i> Subscribe </button>
                </div> 
        </form>
        <small class="form-text text-white-50">We’ll never share your email address with a third-party. </small>
            </div> 
        </div>
            
        
        </div>
        </section>
       
        <footer class="section-footer bg-secondary">
            <div class="container">
                <section class="footer-top padding-y-lg text-white">
                    <div class="row">
                        <aside class="col-md col-6">
                            <h6 class="title">Brands</h6>
                            <ul class="list-unstyled">
                                <li> <a href="#">Adidas</a></li>
                                <li> <a href="#">Puma</a></li>
                                <li> <a href="#">Reebok</a></li>
                                <li> <a href="#">Nike</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Company</h6>
                            <ul class="list-unstyled">
                                <li> <a href="#">About us</a></li>
                                <li> <a href="#">Career</a></li>
                                <li> <a href="#">Find a store</a></li>
                                <li> <a href="#">Rules and terms</a></li>
                                <li> <a href="#">Sitemap</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Help</h6>
                            <ul class="list-unstyled">
                                <li> <a href="#">Contact us</a></li>
                                <li> <a href="#">Money refund</a></li>
                                <li> <a href="#">Order status</a></li>
                                <li> <a href="#">Shipping info</a></li>
                                <li> <a href="#">Open dispute</a></li>
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h6 class="title">Account</h6>
                            <ul class="list-unstyled">
                                <li> <a href="#"> User Login </a></li>
                                <li> <a href="#"> User register </a></li>
                                <li> <a href="#"> Account Setting </a></li>
                                <li> <a href="#"> My Orders </a></li>
                            </ul>
                        </aside>
                        <aside class="col-md">
                            <h6 class="title">Social</h6>
                            <ul class="list-unstyled">
                                <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
                                <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
                                <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
                                <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
                            </ul>
                        </aside>
                    </div> 
                </section>  
        
                <section class="footer-bottom text-center">
                
                       
                        <p class="text-muted"> &copy; 2021 Company name, All rights reserved </p>
                        <br />
                </section>
            </div>
        </footer>
        </div>
        )

}

export default Register