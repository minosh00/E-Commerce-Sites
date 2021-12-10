import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const buy = ({Hposts}) => {
    return (
        <div>
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
                                       <input type="text" class="form-control" placeholder="Search all product"  />
                                       
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
                       <Link to ={{
               pathname:`/`
             }}>
           <button type="button" class="btn btn-danger"><i class="fas fa-shopping-cart"></i>&nbsp;Back to Home </button>
           </Link>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                       </ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                   </div> 
               </div> 
               </nav>
               
               </header>   {/* end of the header */}
       <br></br><br></br>



       <section class="padding-bottom">
        
        <header class="section-heading heading-line">
            <h4 class="title-section text-uppercase">Buy Items</h4>
        </header>
        
        <div class="row">
            <div class="col-md-8">
        <div class="card-banner banner-quote overlay-gradient" style={{maxWidth: '1400px' ,backgroundImage: "url('assets/images/banners/buy2.jpg')"}}>
          <div class="card-img-overlay white">
            <h3 class="card-title">Traditional Sourcing Brought Online. Find Quality Products & Contact Verified Suppliers! </h3>
            <p class="card-text" style={{maxWidth: '200px'}}>Enjoy Upto 80% Discount with AliExpress Coupon Code. Use Our Valid Promo Code & Save! Fashion Coupons. </p>
            <a href="" class="btn btn-primary rounded-pill">Learn more</a>
          </div>
        </div>
            </div>
            <div class="col-md-4">
                  {/* start the create account to register  */}
        
        <div class="card card-body"  style={{maxWidth: '500px' , align:'left'}} >
            <h4 class="title py-3" >Buy and shipping Address</h4>
           
                <div class="form-group" >
                <label>Email Address*</label>
                    <input class="form-control" name="email"  placeholder="Enter your Email" type="text" />
                </div>
                <div class="form-group">
                <label>Full Name*</label>
                    <input class="form-control" name="name"  placeholder="Your Name"  type="text" />
                </div>
                
                <div class="form-group">
                <label>Address*</label>
                    <input class="form-control" name="name"  placeholder=" your Address "  type="text" />
                </div>
                <div class="form-group">
                <label>Postal code*</label>
                    <input class="form-control" name="name"  placeholder=" post code "  type="text" />
                </div>
                <div class="form-group">
                <label>phone number*</label>
                    <input class="form-control" name="name"  placeholder=" Your PhoneNumber "  type="text" />
                </div>
                <div class="form-group">
                <label>Producut code *</label>
                    <input class="form-control" name="name"  placeholder=" enter your select token code  "  type="text" />
                </div>

                
                <div class="form-group">
                    <button class="btn btn-warning"  >Buy and confirm</button><br></br><br></br>
                  
                
                </div>
           
        </div>
          {/* end of the create account part  */}
            </div> 
        </div> 
        </section>
        























       


  
<div class="container">
 
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

export default buy
