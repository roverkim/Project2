const express = require("express");
const router = express.Router(); // Call an Instance of the express.Router(), apply Routes to it, and then Tell the Application to use those Routes


/////////////////////////////////////////////// /* Get Routes */ //////////////////////////////////////////////////////////
router.get("/", function(req, res) { //Handles Root Route
  console.log("Root Path Hit. Sending Home html File");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});
/////////////////////////////////////////////// /* Post Routes */ //////////////////////////////////////////////////////////

router.post("/upload", function(req, res) {
  console.log("DropZone Route Hit");
  console.log(res.body);
});


// Export routes for server.js to use.
module.exports = router;
