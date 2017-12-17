var path = require("path");
var connection = require ('../config/connection.js');
var Sequelize = require('sequelize');

module.exports = function(app) {

 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });


 app.get("/:timeline.html", function(req, res) {

    console.log("Index Path Hit");
    res.sendFile(path.join(__dirname, "../views/timeline.html"));

  });



 app.post("/api/signin", function(req, res) {

   //parse data into variables
    var user = {
      name: req.body.fullName,
      email: req.body.email,
      clientid: req.body.id,
    };
    console.log(user);
      console.log(req.body.fullName);
      console.log(req.body.email);
      console.log(req.body.id);
      console.log(req.body);
    //TODO: write code that interacts with db

       //  user_external_login
        // .findOrCreate({where: {external_user_id: 'clientid'}, defaults: {job: 'Technical Lead JavaScript'}})
        // .spread((user, created) => {
        //   console.log(user.get({
        //     plain: true
        //   }))
        //   console.log(created)


  /*
    findOrCreate returns an array containing the object that was found or created and a boolean that will be true if a new object was created and false if not, like so:

  [ {
       username: 'sdepold',
       job: 'Technical Lead JavaScript',
       id: 1,
       createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
       updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
     },
     true ]

In the example above, the "spread" on line 39 divides the array into its 2 parts and passes them as arguments to the callback function defined beginning at line 39, which treats them as "user" and "created" in this case. (So "user" will be the object from index 0 of the returned array and "created" will equal "true".)
   */
 })
    // res.send({ "hi": "hello" })

}
