<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up Form by Colorlib</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">

    <style>

</style>
</head>
<body>


<div  class="main">
<section class="signup">
        <div class="container">
            <div class="signup-content">
                <!-- <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body"> -->
                    <form method="POST" action="{{ route('login') }}" class="signup-form" id="signup-form">
                        @csrf
                        <h2 class="form-title">LogIn</h2>


                     
                        <div class="form-group">
                            <input type="text" class="form-input  @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="email"/>
                        
                            @error('email')
                                    <span style='color:red;' role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-input @error('password') is-invalid @enderror" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                            @error('password')
                                    <span style='color:red;' role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>


                 

                
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit" class="form-submit" value="Login"/>
                        </div>

            

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                                <p class="loginhere">
                        Create a new account ? <a href="/register" class="loginhere-link">Register Here</a>
                    </p>
                    <p class="loginhere">
                         <a href="/" class="loginhere-link">Home</a>
                    </p>
                            </div>
                        </div>
                    </form>
                    
                <!-- </div>
            </div> -->
        
    </div>
    </section>
</div>

  <!-- JS -->
  <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>