let mongoose =require('mongoose')
express =require('express'),
  router=express.Router();

let User = require('../models/UserSchema');

// router.route('/createUser').post((req, res, next) => {
//     UserSchema.create(req.body, (error, data) => {
//       console.log("this is req "+ req);
//       if (error) {
//         return next(error)
//       } else {
//         console.log(data)
//         res.json(data)
//       }
//     })
//   });
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(200).json({
//         status: "fail",
//         message: "Not all fields have been entered",
//       });
//     }
//     if (password.length < 6 || password.length > 25) {
//       return res.status(200).json({
//         status: "fail",
//         message: "Password must be between 6-25 characters",
//         type: "password",
//       });
//     }
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(200).json({
//         status: "fail",
//         message: "An account with this username already exists.",
//         type: "username",
//       });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({ username, password: hashedPassword });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     return errorMessage(res, error);
//   }
// };

router.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



  router.post('/createUser', (req, res) => {
    const {username,email,password} = req.body;
    const newTask = new User({username,email,password});
  
    newTask.save()
      .then(User => res.json(User))
      .catch(err => res.status(500).json(err));
  });
 
  
  router.post('/login', async(req, res) => {
    const {username,password} = req.body;
    const existingUser =   await User.findOne({ username,password });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }
  });

  router.post('/userPersonal', (req, res) => {
    const {username,email,password} = req.body;
    const newTask = new User({username,email,password});
  
    newTask.save()
      .then(User => res.json(User))
      .catch(err => res.status(500).json(err));
  });







  router.route('/ChangeCredentials/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })
  
  // Delete Student
  router.route('/DeleteUser/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })















 module .exports = router;