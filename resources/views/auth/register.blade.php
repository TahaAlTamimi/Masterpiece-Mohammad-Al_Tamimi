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

    <div class="main">

        <section class="signup">
            <!-- <img src="../../public/images/body.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="signup-form" class="signup-form"  action="{{ route('register') }}" enctype='multipart/form-data'>
                    @csrf
                        <h2 class="form-title">Create account</h2>
                        <div class="form-group">
                            <input type="text" class="form-input  @error('name') is-invalid @enderror" name="name" id="name" placeholder="Your Name"/>
                        
                            @error('name')
                                    <span style='color:red;' role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input @error('email') is-invalid @enderror" name="email" id="email" placeholder="Your Email"/>
                            @error('email')
                                    <span  style='color:red;'>
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
                            <input  placeholder='Confirm Password' id="re_password"  type="password" class="form-input" name="password_confirmation" required autocomplete="new-password">
                     </div>


                     <div class="form-group">
                     <label for="agree-term" class="label-agree-term"><span><span></span></span>profile image <a  class="term-service">not required</a></label>

                            <input id="image_profile" type="file"  class=" form-input  @error('image_profile') is-invalid @enderror" name="image_profile" >

                            <div class="form-group">
                              
                                @error('image_profile')
                                    <span style='color:red;' role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
                        </div>


                       
                    </form>
                    <p class="loginhere">
                        Have already an account ? <a href="/login" class="loginhere-link">Login here</a>
                    </p>
                    <p class="loginhere">
                         <a href="/" class="loginhere-link">Home</a>
                    </p>
                </div>
            </div>
        </section>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>



