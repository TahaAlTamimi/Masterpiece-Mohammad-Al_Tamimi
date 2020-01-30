<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- ourdesign -->
<meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- cdn -->
    <!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<!-- Bootstrap core CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.10.1/css/mdb.min.css" rel="stylesheet">


<!-- ourdesign -->
<!-- <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

  <!-- <link rel="icon" href="{{asset('img/core-imFg/favicon.ico')}}"> -->

<!-- Core Stylesheet -->
<link rel="stylesheet" href="{{asset('/style.css')}}">
</head>

<body>



<div id="app">
<script>
$=jQuery;
</script>
 <script language="JavaScript"  src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
 <header class="header-area">
        <!-- Navbar Area -->
        <div class="fitness-main-menu">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Menu -->
                    <nav class="classy-navbar justify-content-between" id="fitnessNav">

                        <!-- Nav brand -->
                        <a href="/" class="nav-brand"><img src="" alt="">H&S</a>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu">

                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li><a href="/">Home</a></li>



                                    </li>
                                    <li><a href="/blog">Article</a></li>
                                    <li><a href="/youtube">Exercise</a></li>
                                    <li><a href="/recipe">Recipe</a>
                                    <li><a href="/calculate">Advice</a></li>

                                    @auth
                                    <li><a href="/question">add your question</a></li>
                                    @endauth
                                    @if(!Auth::guest() && Auth::user()->hasAnyRole(['Admin']))

<li><a href="#">Admin</a>
    <ul class="dropdown">
        <li><a href="/AllQuestionExpert">Answer</a></li>
        <li><a href="/post">Add Article</a></li>
        <li><a href="/Adminrecipe">Add Recipe</a></li>
        <li><a href="/blogAdmin">Edit Article</a></li>
        <li><a href="/recipeAdmin">Edit Article</a></li>

    </ul>
</li>
@endif

@if(!Auth::guest() && Auth::user()->hasAnyRole(['Expert']))
                 <a class="dropdown-item"href="{{ url('/AllQuestionExpert') }}"
                                     >
                                        {{ __('Answer') }}
                                    </a>


                 @endif

                                    @guest
                            <li>
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li>
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif


                                    </li>


                                </ul>

                                <!-- Call Button -->


                                <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->

                        @else
                        <li><a href="#"> {{ Auth::user()->name }} <span class="caret"></span>
                                        <img src= "{{asset(Auth::user()->image_profile)}}" style="height:35px;width:35px; border-radius:50%;margin-right:15px; " >
     </a>
    <ul class="dropdown">
  
        <span>
        <a  style="color: black;" href="/user/{{Auth::user()->id}}">My Profile</a></span>
        <a style="color: black;" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                                       {{ __('Logout') }}

        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
       
                                 
    </ul>
</li>






                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item"href="/user/{{Auth::user()->id}}"
                                     >
                                        {{ __('my profile') }}
                                    </a>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>


                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>

                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(/img/bg-img/breadcumb-2.jpg);">
        <div class="bradcumbContent">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2></h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/"></a></li>
                                <li class="breadcrumb-item active" aria-current="page"></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>


   



    <div id="app">

    

        <main class="py-4">
        @yield('user')
            @yield('content')
           
        </main>

        <footer class="footer-area section-padding-100-0 bg-img bg-overlay" style="background-image: url(img/bg-img/footer.jpeg);">

<div class="main-footer-area">
    <div class="container">
        <div class="row">

            <!-- Footer Widget Area -->

<div class="col-12 col-sm-6 col-lg-3">
                <div class="footer-widget-area mb-50">
                    <!-- Widget Title -->
                    <div class="widget-title">
                        <a href="#"></a>
                    </div>
                    <p class="mb-30">Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien. Proin vehicula varius ex, vel feugiat massa scelerisque id. Nullam vulputate a lectus non molestie. Duis at lobortis neque.</p>
                    <!-- Social Info -->
                    <div class="footer-social-info">
                        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

            <!-- Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="footer-widget-area mb-50">
                    <!-- Widget Title -->
                    <div class="widget-title">
                        <h6>testimonials</h6>
                    </div>

                    <!-- Testimonials Slides -->
                    <div class="testimonials-slides owl-carousel">

                        <div class="single-slide">
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 1</span>
                            </div>
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 2</span>
                            </div>
                        </div>

                        <div class="single-slide">
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 3</span>
                            </div>
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 4</span>
                            </div>
                        </div>

                        <div class="single-slide">
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Donec molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 5</span>
                            </div>
                            <!-- Single Testimonial -->
                            <div class="single-testimonial">
                                <p>“ Molestie tincidunt tellus sit amet aliquet. Proin auctor nisi ut purus</p>
                                <span>user 6</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="footer-widget-area mb-50">
                    <div class="widget-title">
                        <h6>Helpful Site</h6>
                    </div>

                    <nav>
                        <ul class="fitness-classes">
                            <li><a href="#">Bodybuilding Class</a></li>
                            <li><a href="#">Fitness Class</a></li>
                            <li><a href="#">Yoga Courses</a></li>
                            <li><a href="#">Dumbell Class</a></li>
                            <li><a href="#">Spinning Class</a></li>
                            <li><a href="#">Kangoo Jump Class</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Footer Widget Area -->
            <div class="col-12 col-sm-6 col-lg-3">
                <div class="footer-widget-area mb-50">
                    <div class="widget-title">
                        <h6>Contact</h6>
                    </div>

                    <!-- Single Contact -->
                    <div class="single-contact mb-30">
                        <span>Address:</span>
                        <p>Amman -Jordan <br>orange Coding Academy</p>
                    </div>

                    <!-- Single Contact -->
                    <div class="single-contact mb-30">
                        <span>Phone:</span>
                        <p>+962785092393</p>
                    </div>

                    <!-- Single Contact -->
                    <div class="single-contact mb-30">
                        <span>Email:</span>
                        <p>altamimitmo@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

<!-- Copywrite Area -->
<div class="bottom-footer-area">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p><a href="#"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Health & Sport</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</p>
            </div>
        </div>
    </div>
</div>
</footer>
       
    </div>





                </body>
</html>




<!--  -->

  <!-- ##### All Javascript Script ##### -->
    <!-- jQuery-2.2.4 js -->
    <script src="{{asset('js/jquery/jquery-2.2.4.min.js')}}"></script>
    <!-- Popper js -->
    <script src="{{asset('js/bootstrap/popper.min.js')}}"></script>
    <!-- Bootstrap js -->
    <!-- <script src="js/bootstrap/bootstrap.min.js"></script> -->
    <!-- All Plugins js -->
    <script src="{{asset('js/plugins/plugins.js')}}"></script>
    <!-- Active js -->
    <script src="{{asset('js/active.js')}}"></script>
    <!-- Live Chat Code :: Start of Tawk.to Script -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>
    <script src="http://code.jquery.com/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>




    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e21fa41daaca76c6fce9286/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<!-- Footer -->

</script>
