'use strict';

var Area = require('./models/area.js');
var Boulder = require('./models/boulder.js');
var Problem = require('./models/problem.js');
var Comment = require('./models/comment.js');

var areas = [
  {
    name: "The Cove",
    description: "This is one of the most popular bouldering areas at the Red River Gorge due to it’s close proximity to the sport climbing and variety of grades… and also because it hosts some pretty fun bouldering. The climbing here is very steep, so if this isn’t your style then you should go to some other state to boulder, because there ain’t no slab here. Parking here is limited, probably 3-4 car max, but you can shuttle from or park at the Military/Left flank parking lot. To get here from Slade, drive through the Nada Tunnel on 77 and park on or just after the second or most prominent switch back. If you look on Bing maps there will be a truck parked in one of the few parking spots (just look up Nada Tunnel). There should be a fairly obvious trail leading you up the hill and to the right, follow this until you reach a cliff and go left. When that cliff dies out go uphill again and traverse left again beneath another small cliff. Once again you will head up hill until you reach another cliff and now you will walk right until you get to the cove."
  },
  {
    name: "Area 571",
    description: "Area 571 hosts a range of problems from V1 to V13. The rock is good quality and the approach is minimal. Park at Swift Camp Creek parking area (mile marker 10) on route 715 at the Red (near sky bridge area). From back of parking area walk past bear proof trash cans through a campsite clearing and then left through low brush and pine trees. You should end up on top of small circular cave. Climb down a log into the “back cave.” Continue traversing the ridge past the cave to the Main Wall.  Be careful not to fall off and die!"
  }
];

Area.find({}).exec(function(err, collection) {
  if (!err && !collection.length) {
    areas.forEach(function(area, index) {
      Area.create({name: area.name, description: area.description});
    });
  }
});
