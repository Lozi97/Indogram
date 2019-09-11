
    const http = require('http')
    //const express = require('express')
    const logger = require('morgan')
    const bodyParser = require('body-parser')
    const routes = require('./server/routes')
    var cors = require("cors");

    const express         =     require('express')
  , passport          =     require('passport')
  , InstagramStrategy  =     require('passport-instagram').Strategy
  , session           =     require('express-session')
  , cookieParser      =     require('cookie-parser')
  //, bodyParser        =     require('body-parser')
  //, config            =     require('./configuration/config')
  //, mysql             =     require('mysql')
  //, app               =     express();

    // const passport = require('passport');
    // var Instagram = require('passport-instagram');
    // const InstagramStrategy = Instagram.Strategy;
     const model = require('./server/models')
     const { User } = model;


    const hostname = '127.0.0.1';
        const port = 3000;
        const app = express()
        const server = http.createServer(app);

        app.use(logger('dev'));
        app.use(bodyParser.json());
        //app.use(bodyParser.urlencoded({ extended: false }));


       
        
  


        //  getUsers(req, res) {
        //   return User
        //     .findAll()
        //     .then(users => res.status(200).send(users));
        // }
        //app.use(passport.initialize());
        //app.use(passport.session());
        passport.serializeUser((user, done) => {
        done(null, user)
        })
        passport.deserializeUser((user, done) => {
        done(null, user)
        })
    
        passport.use(new InstagramStrategy({
          clientID: "848f6a0cc2fb4d5bb81114891601d15a",
          clientSecret: "fe112d21501242938363ac2d2427722c",
          callbackURL: "http://10.0.2.2:3000/auth/instagram/callback" 
        }, (accessToken, refreshToken, profile, done) => {
         User.findByPk(profile.id)
          .then(user => {
         
            //getUser(profile._json.data);
            console.log(profile._json.data["counts"]["followed_by"])
            
            if(user) {
              app.get('/api/user', function (req, res) {
                res.send(profile._json.data)
                
              })
             return done(null, user); // Check if user already exists

            }            
         
        
        //.findOne({ 'id': profile.id }, function(err, user) {
          //  if (err) return callback(err);
        // if (user) {
        //       return done(null, user); // Check if user already exists
        //     }
        const id = profile._json.data["id"];
        const InstaUsername = profile._json.data["username"];
        const FullName = profile._json.data["full_name"];
        const ProfilePicture = profile._json.data["profile_picture"];
        const Bio = profile._json.data["bio"];
        const Website = profile._json.data["website"];
        const IsBusiness = profile._json.data["is_business"];
        const NumberOfPosts = profile._json.data["counts"]["media"];
        const NumberOfFollows = profile._json.data["counts"]["follows"];
        const NumberOfFollowers = profile._json.data["counts"]["followed_by"];


        //const counts: { media, follows, followed_by } = profile._json.data["counts"];
       // const FullName = profile._json.data["full_name"];

        // var {
        //       id,
        //       FullName,
        //       InstaUsername,
        //       profile_picture,
        //       bio,
        //       website,
        //       counts: { media, follows, followed_by }
        //     } = profile._json.data;
           console.log(FullName)
           console.log(InstaUsername)
           console.log(id)
           console.log(profile._json.data["counts"]["media"])

         //insta(req, res) 
   // const {NumberOfFollwers,AccountStartDate,Age,Location,Email,PhoneNumber,Gender,TypeOfInfluencers,OverAllRating } = req.body
      return User
        .create({id,
          InstaUsername,
          FullName,
          ProfilePicture,
          Bio,
          Website,
          IsBusiness,
          NumberOfPosts,
          NumberOfFollows,
          NumberOfFollowers,
            // AccountStartDate,
            // Age,
            // Location,
            // Email,
            // PhoneNumber,
            // Gender,
            // TypeOfInfluencers,
            // OverAllRating
          
        })


        
      })

   
         // });
        }))

    
        app.use(cors());

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({ secret: 'keyboard cat', key: 'sid'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(__dirname + '/public'));
    
    app.get('/', function(req, res){
      res.render('index', { user: req.user });
    });
    
    app.get('/account', ensureAuthenticated, function(req, res){
      res.render('account', { user: req.user });
    });
    
   

        // app.get('/auth/instagram', passport.authenticate('instagram'));
        // app.get(
        //   '/auth/instagram/callback',
        //   passport.authenticate('instagram', {
        //     successRedirect: '/profile',
        //     failureRedirect: '/login'
        //   })
        // );

    app.get('/auth/instagram', passport.authenticate('instagram'));
    
    
    app.get('/auth/instagram/callback',
      passport.authenticate('instagram', { successRedirect : '/', failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });
    
    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
    
    
    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/login')
    }


        routes(app);

        // app.get('*', (req, res) => res.status(200).send({
        //   message: 'Welcome to the .',
        // }));

        server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });