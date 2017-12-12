const express = require("express");
const router = express.Router(); // Call an Instance of the express.Router(), apply Routes to it, and then Tell the Application to use those Routes


/////////////////////////////////////////////// /* Get Routes */ //////////////////////////////////////////////////////////

/////////////////////////////////////////////// /* Post Routes */ //////////////////////////////////////////////////////////

router.post("/upload", function(req, res) {
  console.log("DropZone Route Hit");
  console.log(res.body);
});


// Export routes for server.js to use.
module.exports = router;
