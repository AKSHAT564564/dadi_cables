<?php
require('../myblog/includes/db.php');
include('../myblog/includes/function.php');

if(isset($_GET['page'])){
  $page=$_GET['page'];
}else{
  $page=1;
}
$post_per_page=5;
$result=($page-1)*$post_per_page;

// $result = 0
// $result = 5;
// $result = 10
 if(isset($_GET['search'])){
         $keyword = $_GET['search'];
         $postQuery="SELECT * FROM posts WHERE title LIKE '%$keyword%' ORDER BY id DESC LIMIT $result,$post_per_page";
       }else{
        $postQuery="SELECT * FROM posts ORDER BY id DESC LIMIT $result,$post_per_page";
       }
      
       $runPQ=mysqli_query($db,$postQuery);
?>


<!DOCTYPE html>
<html lang="zxx">
    <head>
        <!-- meta tag -->
        <meta charset="utf-8">
        <title>Blog – Reobiz – Consulting Business HTML Template</title>
        <meta name="description" content="">
        <!-- responsive tag -->
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- favicon -->
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/fav.png">
        <!-- Bootstrap v4.4.1 css -->
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
        <!-- font-awesome css -->
        <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
        <!-- animate css -->
        <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
        <!-- aos css -->
        <link rel="stylesheet" type="text/css" href="assets/css/aos.css">
        <!-- owl.carousel css -->
        <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css">
        <!-- slick css -->
        <link rel="stylesheet" type="text/css" href="assets/css/slick.css">
        <!-- off canvas css -->
        <link rel="stylesheet" type="text/css" href="assets/css/off-canvas.css">
        <!-- linea-font css -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/linea-fonts.css">
        <!-- flaticon css  -->
        <link rel="stylesheet" type="text/css" href="assets/fonts/flaticon.css">
        <!-- magnific popup css -->
        <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css">
        <!-- Main Menu css -->
        <link rel="stylesheet" href="assets/css/rsmenu-main.css">
        <!-- nivo slider CSS -->
        <link rel="stylesheet" type="text/css" href="assets/inc/custom-slider/css/nivo-slider.css">
        <link rel="stylesheet" type="text/css" href="assets/inc/custom-slider/css/preview.css">
        <!-- rsmenu transitions css -->
        <link rel="stylesheet" href="assets/css/rsmenu-transitions.css">
        <!-- spacing css -->
        <link rel="stylesheet" type="text/css" href="assets/css/rs-spacing.css">
        <!-- style css -->
        <link rel="stylesheet" type="text/css" href="style.css"> <!-- This stylesheet dynamically changed from style.less -->
        <!-- responsive css -->
        <link rel="stylesheet" type="text/css" href="assets/css/responsive.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="your_website_domain/css_root/flaticon.css">
        <link rel="stylesheet" href="../footer.css">
    </head>
    <body>

        <!-- Preloader area start here -->
        <div id="loader" class="loader">
            <div class="spinner"></div>
        </div>
        <!--End preloader here -->

        <!--Full width header Start-->
        <div class="full-width-header">
            <!-- Toolbar Start -->
            <div class="toolbar-area hidden-md">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="toolbar-contact">
                                <ul>
                                    <li><i class="flaticon-email"></i><a href="mailto:info@yourwebsite.com">support@rstheme.com</a></li>
                                    <li><i class="flaticon-call"></i><a href="tel:+123456789">(+123) 456789</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="toolbar-sl-share">
                                <ul>
                                    <li class="opening"> <i class="flaticon-clock"></i> Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends</li>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Toolbar End -->

            <!--Header Start-->
            <header id="rs-header" class="rs-header">
                <!-- Menu Start -->
                <div class="menu-area menu-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="logo-area">
                                    <a href="index.html"><img src="assets/images/logo.png" alt="logo"></a>
                                </div>
                            </div>
                            <div class="col-lg-9 text-right">
                                <div class="rs-menu-area">
                                    <div class="main-menu">
                                        <div class="mobile-menu">
                                            <a class="rs-menu-toggle">
                                                <i class="fa fa-bars"></i>
                                            </a>
                                        </div>
                                        <nav class="rs-menu pr-65">
                                          <ul class="nav-menu">
                                              <li class="rs-mega-menu mega-rs "> <a href="../index.html">Home</a>

                                              </li>

                                              <li class=" ">
                                                  <a href="../aboutus/index.html">Aboutus</a>

                                              </li>

                                              <li class=" ">
                                                  <a href="../products/index.html">Products</a>

                                              </li>

                                              <li class="current-menu-item ">
                                                  <a href="../blog/index.html">Blog</a>

                                              </li>

                                              <li class=" ">
                                                  <a href="#">Career</a>

                                              </li>

                                              <li class="">
                                                  <a href="../contact/index.html">Contact</a>

                                              </li>
                                          </ul>  <!-- //.nav-menu -->
                                        </nav>
                                    </div> <!-- //.main-menu -->
                                    <!-- <div class="expand-btn-inner">
                                        <ul>
                                            <li class="search-parent">
                                                <a class="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                                                    <i class="flaticon-search"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a id="nav-expander" class="humburger nav-expander" href="#">
                                                    <span class="dot1"></span>
                                                    <span class="dot2"></span>
                                                    <span class="dot3"></span>
                                                    <span class="dot4"></span>
                                                    <span class="dot5"></span>
                                                    <span class="dot6"></span>
                                                    <span class="dot7"></span>
                                                    <span class="dot8"></span>
                                                    <span class="dot9"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Menu End -->

                <!-- Canvas Menu start -->
                <nav class="right_menu_togle hidden-md">
                    <div class="close-btn">
                        <span id="nav-close" class="humburger">
                            <span class="dot1"></span>
                            <span class="dot2"></span>
                            <span class="dot3"></span>
                            <span class="dot4"></span>
                            <span class="dot5"></span>
                            <span class="dot6"></span>
                            <span class="dot7"></span>
                            <span class="dot8"></span>
                            <span class="dot9"></span>
                        </span>
                    </div>
                    <div class="canvas-logo">
                        <a href="index.html"><img src="assets/images/logo-dark.png" alt="logo"></a>
                    </div>
                    <div class="offcanvas-text">
                        <p>Consectetur adipiscing elit. Duis at dictum risus, non suscip it arcu. Quisque aliquam posuere tortor aliquam posuere tortor develop database.</p>
                    </div>
                    <div class="canvas-contact">
                        <ul class="contact">
                            <li><i class="flaticon-location"></i> 374 William S Canning Blvd, Fall River MA 2721, USA</li>
                            <li><i class="flaticon-call"></i><a href="tel:+880155-69569">(+880)155-69569</a></li>
                            <li><i class="flaticon-email"></i><a href="mailto:support@rstheme.com">support@rstheme.com</a></li>
                            <li><i class="flaticon-clock"></i>10:00 - 17:00</li>
                        </ul>
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <!-- Canvas Menu end -->
            </header>
            <!--Header End-->
        </div>
        <!--Full width header End-->

		<!-- Main content Start -->
        <div class="main-content">
            <!-- Breadcrumbs Section Start -->
            <div class="rs-breadcrumbs bg-8">
                <div class="container">
                    <div class="content-part text-center pt-160 pb-160">
                        <h1 class="breadcrumbs-title white-color mb-0">Blog</h1>
                    </div>
                </div>
            </div>
            <!-- Breadcrumbs Section End -->

            <!-- Blog Section  Start -->
            <div class="rs-blog inner pt-100 pb-100 md-pt-80 md-pb-80">
                <div class="container">
                    <div class="row">
                      
                        <div class="col-lg-8">
                              <?php 
                        while($post=mysqli_fetch_assoc($runPQ)){
         ?>
                            <div class="blog-wrap shadow mb-70 xs-mb-50">
                                <div class="image-part">
                                    <a href="blog-details.php?id=<?php echo $post['id']; ?>"><img src="../myblog/images/<?=getPostThumb($db,$post['id'])?>" alt=""></a>
                                </div>
                                <div class="content-part">
                                    <h3 class="title mb-10"><a href="blog-details.php?id=<?php echo $post['id']; ?>"><?php echo $post['title']?></a></h3>
                                    <ul class="blog-meta mb-22">
                                        <li><i class="fa fa-calendar-check-o"></i><?=date('F jS, Y',strtotime($post['created_at']))?></li>
                                        <li><i class="fa fa-user-o"></i> admin</li>
                                        <li><i class="fa fa-book"></i> <a href="blog-details.php?id=<?php echo $post['id']; ?>">Strategy</a></li>
                                    </ul>
                                     <?php $content=$post['content'];

                                    $content = substr($content,0,320);
                                ?>
                                    <p class="desc mb-20"><?php echo $content; ?></p>
                                    <div class="btn-part">
                                        <a class="readon-arrow" href="blog-details.php?id=<?php echo $post['id']; ?>">Continue Reading</a>
                                    </div>
                                </div>
                            </div>
                            <?php } ?>
                        </div>

                        <div class="col-lg-4 md-mb-50 pl-35 lg-pl-15 md-order-first">
                            <div id="sticky-sidebar" class="blog-sidebar">
                                <div class="sidebar-search sidebar-grid shadow mb-50">
                                    <form class="search-bar">
                                        <input type="text" placeholder="Search...">
                                        <span>
                                          <button type="submit"><i class="flaticon-search"></i></button>
                                        </span>
                                    </form>
                                </div>

                                <div class="sidebar-popular-post sidebar-grid shadow mb-50">
                                    <div class="sidebar-title">
                                       <h3 class="title semi-bold mb-20">Recent Post</h3>
                                    </div>
                                    <?php $query="SELECT * FROM posts ORDER BY id DESC LIMIT 5";
                                    $run=mysqli_query($db,$query); 
                                    while($posts=mysqli_fetch_assoc($run)){?>
                                    <div class="single-post mb-20">
                                        <div class="post-image">
                                            <a href="blog-details.php?id=<?php echo $posts['id']; ?>"><img src="../myblog/images/<?=getPostThumb($db,$posts['id'])?>" alt="post image"></a>
                                        </div>
                                        <div class="post-desc">
                                            <div class="post-title">
                                                <h5 class="margin-0"><a href="blog-details.php?id=<?php echo $posts['id']; ?>"><?php echo $posts['title']?> </a></h5>
                                            </div>
                                            <ul>
                                                <li><i class="fa fa-calendar"></i><?=date('F jS, Y',strtotime($posts['created_at']))?> </li>
                                            </ul>
                                        </div>
                                    </div>
                                 
                                  <?php } ?>
                                    
                                </div>

                                <div class="sidebar-categories sidebar-grid shadow">
                                    <div class="sidebar-title">
                                       <h3 class="title semi-bold mb-20">Categories</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Consulting</a></li>
                                        <li><a href="#">Creative</a></li>
                                        <li><a href="#">Development</a></li>
                                        <li><a href="#">Finance</a></li>
                                        <li><a href="#">Management</a></li>
                                        <li><a href="#">Strategy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-end"></div>
                </div>
            </div>
            <!-- Blog Section  End -->
        </div>
        <?php
if(isset($_GET['search'])){
  $keyword=$_GET['search'];
$q="SELECT * FROM posts WHERE title LIKE '%$keyword%'";

}else{
  $q="SELECT * FROM posts";

}
$r=mysqli_query($db,$q);
$total_posts=mysqli_num_rows($r);
$total_pages=ceil($total_posts/$post_per_page);

?>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
        <?php
if($page>1){
  $switch="";
}else{
  $switch="disabled";
}
if($page<$total_pages){
  $nswitch="";
}else{
  $nswitch="disabled";
}
        ?>
      
        <li class="page-item <?=$switch?>">
            <a class="page-link" href="?<?php if(isset($_GET['search'])){echo "search=$keyword&";}?>page=<?=$page-1?>" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <?php
for($opage=1;$opage<=$total_pages;$opage++){
  ?>
          <li class="page-item"><a class="page-link" href="?<?php if(isset($_GET['search'])){echo "search=$keyword&";}?>page=<?=$opage?>"><?=$opage?></a></li>

  <?php
}
          ?>
          
          <li class="page-item <?=$nswitch?>">
            <a class="page-link" href="?<?php if(isset($_GET['search'])){echo "search=$keyword&";}?>page=<?=$page+1?>">Next</a>
          </li>
</ul>
</nav>
<br><br>
        <!-- Main content End -->

        <!-- Footer Start -->

                <footer id="rs-footer" class="rs-footer">
                    <div class="container">
                        <div class="footer-newsletter">
                            <div class="row y-middle">
                                <div class="col-md-6 sm-mb-26">
                                    <h3 class="title white-color mb-0">Newsletter Subscribe</h3>
                                </div>
                                <div class="col-md-6 text-right">
                                    <form class="newsletter-form">
                                        <input type="email" name="email" placeholder="Your email address" required="">
                                        <button type="submit"><i class="fa fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                            </div>
                        </div>
                    </div>
                </footer>
                          <footer id="footer">
                                <div id="footer-widgets" class="container style-1">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="widget widget_text">
                                                <h2 class="widget-title"><span>ABOUT US</span></h2>
                                                <div class="textwidget">
                                                    <img src="assets/images/logo.png" width="100" height="10" alt="image" class="margin-top-5 margin-bottom-25" />
                                                    <p>Building isn’t just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality.</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="widget widget_links">
                                                <h2 class="widget-title"><span>COMPANY LINKS</span></h2>
                                                <ul class="wprt-links clearfix col2">
                                                    <li class="style-2"><a href="#">History</a></li>
                                                    <li class="style-2"><a href="#">Services</a></li>
                                                    <li class="style-2"><a href="#">Team & Awards</a></li>
                                                    <li class="style-2"><a href="#">Delivery Methods</a></li>
                                                    <li class="style-2"><a href="#">Community</a></li>
                                                    <li class="style-2"><a href="#">Safety</a></li>
                                                    <li class="style-2"><a href="#">News & Events</a></li>
                                                    <li class="style-2"><a href="#">Sustainability</a></li>
                                                    <li class="style-2"><a href="#">FAQ</a></li>
                                                    <li class="style-2"><a href="#">Portfolio</a></li>
                                                    <li class="style-2"><a href="#">Contact Us</a></li>
                                                    <li class="style-2"><a href="#">Shop</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="widget widget_information">
                                                <h2 class="widget-title"><span>CONTACT INFO</span></h2>
                                                <ul class="style-2">
                                                    <li class="address clearfix">
                                                        <span class="hl">Address:</span>
                                                        <span class="text">1379 Shoreline Parkway, Mountain View, CA 94043, United States</span>
                                                    </li>
                                                    <li class="phone clearfix">
                                                        <span class="hl">Phone:</span>
                                                        <span class="text">+1 718-999-3939</span>
                                                    </li>
                                                    <li class="email clearfix">
                                                        <span class="hl">E-mail:</span>
                                                        <span class="text">contact@construction.com</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="widget widget_spacer">
                                                <div class="wprt-spacer clearfix" data-desktop="10" data-mobi="10" data-smobi="10"></div>
                                            </div>

                                            <div class="widget widget_socials">
                                                <div class="socials">
                                                    <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                                                    <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                                                    <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                                                    <a target="_blank" href="#"><i class="fa fa-pinterest"></i></a>
                                                    <a target="_blank" href="#"><i class="fa fa-dribbble"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>
        <!-- Footer End -->

        <!-- start scrollUp  -->
        <div id="scrollUp">
            <i class="fa fa-angle-up"></i>
        </div>
        <!-- End scrollUp  -->

        <!-- Search Modal Start -->
        <div aria-hidden="true" class="modal fade search-modal" role="dialog" tabindex="-1">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="flaticon-cross"></span>
            </button>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="search-block clearfix">
                        <form>
                            <div class="form-group">
                                <input class="form-control" placeholder="Search Here..." type="text" required="">
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search Modal End -->

        <!-- modernizr js -->
        <script src="assets/js/modernizr-2.8.3.min.js"></script>
        <!-- jquery latest version -->
        <script src="assets/js/jquery.min.js"></script>
        <!-- Bootstrap v4.4.1 js -->
        <script src="assets/js/bootstrap.min.js"></script>
        <!-- Menu js -->
        <script src="assets/js/rsmenu-main.js"></script>
        <!-- op nav js -->
        <script src="assets/js/jquery.nav.js"></script>
        <!-- owl.carousel js -->
        <script src="assets/js/owl.carousel.min.js"></script>
        <!-- Slick js -->
        <script src="assets/js/slick.min.js"></script>
        <!-- isotope.pkgd.min js -->
        <script src="assets/js/isotope.pkgd.min.js"></script>
        <!-- imagesloaded.pkgd.min js -->
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <!-- wow js -->
        <script src="assets/js/wow.min.js"></script>
        <!-- aos js -->
        <script src="assets/js/aos.js"></script>
        <!-- Skill bar js -->
        <script src="assets/js/skill.bars.jquery.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
         <!-- counter top js -->
        <script src="assets/js/waypoints.min.js"></script>
        <!-- video js -->
        <script src="assets/js/jquery.mb.YTPlayer.min.js"></script>
        <!-- magnific popup js -->
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <!-- Nivo slider js -->
        <script src="assets/inc/custom-slider/js/jquery.nivo.slider.js"></script>
        <!-- plugins js -->
        <script src="assets/js/plugins.js"></script>
        <!-- contact form js -->
        <script src="assets/js/contact.form.js"></script>
        <!-- main js -->
        <script src="assets/js/main.js"></script>
    </body>
</html>
