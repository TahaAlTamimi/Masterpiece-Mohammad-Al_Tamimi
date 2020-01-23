<h1>not auth</h1>



<div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-success shadow-sm ">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <a class="navbar-brand" href="{{ url('/blog') }}">
                    {{ config('blog', 'blog') }}
                </a>
            
                <a class="navbar-brand" href="{{ url('/youtube') }}">
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <Link to='/youtube'>exercise</Link>
                </a>
                <a class="navbar-brand" href="{{ url('/recipe') }}">
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <Link to='/recipe'>recipe</Link>
                </a>
                <a class="navbar-brand" href="{{ url('/calculate') }}">
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <Link to='/calculate'>advice</Link>
                </a>
                <a class="navbar-brand" href="{{ url('/question') }}">
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <Link to='/question'>add yourQuestion</Link>
                </a>

                @if(!Auth::guest() && Auth::user()->hasAnyRole(['Admin']))
                <!-- <a class="navbar-brand" href="{{ url('/AllQuestionExpert') }}"> -->
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <!-- <Link to='/AllQuestionExpert'>answer</Link> -->
                <!-- </a> -->
                <!-- <a class="navbar-brand" href="{{ url('/post') }}"> -->
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <!-- <Link to='/post'>AddBolgs</Link> -->
                <!-- </a> -->
                <!-- <a class="navbar-brand" href="{{ url('/Adminrecipe') }}"> -->
                    <!-- {{ config('Bolg', 'Bolg') }} -->
                    <!-- <Link to='/Adminrecipe'>Addrecipe</Link> -->
                <!-- </a> -->
                <li class="nav-item dropdown">
                                <a id="navbarDropdown"  data-toggle="dropdown" class="font-weight-bold text-uppercase text--dark" >
                                    Admin Bar
                                      
                                </a>
                  

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                  

                                <a class="dropdown-item"href="{{ url('/AllQuestionExpert') }}"
                                     >
                                        {{ __('Answer') }}
                                    </a>
                                

                                    <a class="dropdown-item"href="{{ url('/post') }}"
                                     >
                                        {{ __('add blog') }}
                                    </a>
                                    <a class="dropdown-item"href="{{ url('/Adminrecipe') }}"
                                     >
                                        {{ __('add Recipe') }}
                                    </a>
                                    <a class="dropdown-item"href="{{ url('/blogAdmin') }}"
                                     >
                                        {{ __('Edit Blog') }}
                                    </a>
                                    <a class="dropdown-item"href="{{ url('/recipeAdmin') }}"
                                     >
                                        {{ __('Edit Recipe') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                 @endif




                 @if(!Auth::guest() && Auth::user()->hasAnyRole(['Expert']))
                 <a class="dropdown-item"href="{{ url('/AllQuestionExpert') }}"
                                     >
                                        {{ __('Answer') }}
                                    </a>
             
                
                 @endif

              
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                        <img src= "{{asset(Auth::user()->image_profile)}}" style="height:35px;width:35px; border-radius:50%;margin-right:15px; " >
     
                                </a>
                  

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
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>