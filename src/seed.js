'use strict';

var Area = require('./models/area.js');
var Boulder = require('./models/boulder.js');
var Problem = require('./models/problem.js');
var Comment = require('./models/comment.js');




//--------------THIS WHOLE SEED CAN BE REWORKED TO BE MORE EFFICIENT





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

var area571Boulders = [
  {
    name: "The Back Cave",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies aliquam tellus. Ut in mi ut sapien venenatis placerat. Vestibulum blandit enim a nibh faucibus, nec mattis eros elementum. Suspendisse."
  },
  {
    name: "The Main Wall",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies aliquam tellus. Ut in mi ut sapien venenatis placerat. Vestibulum blandit enim a nibh faucibus, nec mattis eros elementum. Suspendisse."
  }
];

var coveBoulders = [
    {
      name: "The Cove",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies aliquam tellus. Ut in mi ut sapien venenatis placerat. Vestibulum blandit enim a nibh faucibus, nec mattis eros elementum. Suspendisse."
    }
];

var coveProblems = [
  {
    "name": "Rohypnol",
    "grade": 6,
    "description": "Sit start to the left of Covert Methods in the back of a low-lying roof with your hands in two envelope slots. Work your way out the roof to a brief overhang then drop off once established above the roof on jugs.",
    "FA": "Joel"
  },
  {
    "name": "Covert Methods",
    "grade": 6,
    "description": "Start on an obvious jug and climb straight out, make a big move, then continue on crimps until you reach a jug past the lip. Topping out is not recommended, as for everything else here.",
    "FA": "Timy Fairfield"
  },
  {
    "name": "Direct Methods",
    "grade": 8,
    "description": "Start on Covert Methods and make the first big move with your left and go up and right to finish on the jug rail of the Warm-Up Traverse.",
    "FA": "Aaron Kupferer"
  },
  {
    "name": "SFO",
    "grade": 9,
    "description": "Start on a wavy edge five feet to the left of Kryptonite and use some bad pinches, tricky footwork, and a small crimp to make your way left continue along the path of UFO Left.",
    "FA": "Adam Taylor"
  },
  {
    "name": "Ghetto Methods",
    "grade": 10,
    "description": "Classic old school hard problem. Start with both hands on a right facing slopey ledge about 10 feet left of the small arete. Make a big move to a pocket and decide how you will finish.",
    "FA": "David Hume"
  }
];

var area571MainWallProblems = [
  {
    "name": "Walk the Plank Right",
    "grade": 4,
    "description": "This is the right most line on the wall. About 10 feet right of Poon Tsunami. It starts on a slopey rail on the left side of the arete and climbs up and right around the arete and tops out on the slab. The slab is pretty dirty right now but still goes",
    "FA": "Fisher"
  },
  {
    "name": "Poon Tsunami",
    "grade": 4,
    "description": "Left of the arete, start underclinging on obvious downward facing flake with wide space behind it. Use bad smears to power up to another undercling crack up and left. Play with your feet and cross through above the crack to a top out jug.",
    "FA": "Grosh"
  },
  {
    "name": "PC-7",
    "grade": 4,
    "description": "Left of Poon Tsunami. Start on same holds as Orbitalia and traverse right all the way across hueco. Bump to a jug and crimp and pop out right to some deep holds. Make a large powerful move to the lip and top out.",
    "FA": "Grosh"
  },
  {
    "name": "Orbitalia",
    "grade": 7,
    "description": "Start on large tooth shaped jug on right side of giant stand-in hueco. Traverse up and right past the “septum” on jugs. Cross up to undercling on inside of “PC-7” hueco. Make some powerful moves to a crimp and then jugs on the outer face of the wall. Top out on PC-7",
    "FA": "Grosh"
  },
  {
    "name": "Clockwork Orange",
    "grade": 7,
    "description": "Same start as “Orbitalia” but move up and left after hitting the “septum” rock feature. Jab for some nice holds in the obious horizontal crack in the face. Slap up to some slopers and mantel up to finish. Stack your pads and jump off.",
    "FA": "Grosh"
  }
];

var area571BackCaveProblems = [
  {
    "name": "Cinder and Smoke",
    "grade": 5,
    "description": "Start low on slopey rail on inside of obvious arete on right side of cave. Make some sort-of powerful moves to a big throw to slopey rail on outside of cave, match and mantel.",
    "FA": "Grosh"
  },
  {
    "name": "Tramway",
    "grade": 10,
    "description": "Start bear hugging on prominent overhanging bulge. Slap, heel-hook, and throw  out to obvious slopey point. Match on some pockets and pounce for  a jug. Top out.",
    "FA": "Taylor"
  },
  {
    "name": "Private Selection",
    "grade": 13,
    "description": "Start low on big undercling for right and left hand high. Make way up and into the stand of Tramway… really hard.",
    "FA": "Jimmy Webb"
  },
  {
    "name": "Smoke Signals",
    "grade": 10,
    "description": "Start low on slopey holds in middle back of cave. Traverse up and right to slopey jugs near roof. Make powerful move to diagonal crimpy undercling in ceiling of roof and throw out to good edges at front of cave, (near finish of tramway). Match and twist around to finish on same jugs as tramway. Top out.",
    "FA": "Adam Taylor"
  },
  {
    "name": "Burn Collector",
    "grade": 9,
    "description": "Stand start to the left side of cave . Start with slopey undercling/sidepull with the right hidden in roof of cave and the slopey crimp at lip of cave with the left. Hard move to the big sloper, hard drop in to match it, and then a move up to the jug on the lip.",
    "FA": "Grosh"
  }
];




areas.forEach(function(area, index) {
  Area.find({}, function(err, areas) {
    if (!err && !areas.length) {
      Area.create({
        name: area.name,
        description: area.description
      });
    }
  });
});

area571Boulders.forEach(function(boulder, index) {
  Boulder.find({}, function(err, area571Boulders) {
    if (!err && !area571Boulders.length) {
      Boulder.create({
        name: boulder.name,
        description: boulder.description,
        parentArea: "0001"
      });
    }
  });
});

coveBoulders.forEach(function(boulder, index) {
  Boulder.find({}, function(err, coveBoulders) {
    if (!err && !coveBoulders.length) {
      Boulder.create({
        name: boulder.name,
        description: boulder.description,
        parentArea: "5822874ff8c5f11debc4f5d8"
      });
    }
  });
});

coveProblems.forEach(function(problem, index) {
  Problem.find({}, function(err, coveProblems) {
    if (!err && !coveProblems.length) {
      Problem.create({
        name: problem.name,
        grade: problem.grade,
        description: problem.description,
        FA: problem.FA,
        parentBoulder: "582292e70d8ff325b13e64ab"
      });
    }
  });
});

area571MainWallProblems.forEach(function(problem, index) {
  Problem.find({}, function(err, area571MainWallProblems) {
    if (!err && !area571MainWallProblems.length) {
      Problem.create({
        name: problem.name,
        grade: problem.grade,
        description: problem.description,
        FA: problem.FA,
        parentBoulder: "582292e70d8ff325b13e64aa"
      });
    }
  });
});

area571BackCaveProblems.forEach(function(problem, index) {
  Problem.find({}, function(err, area571BackCaveProblems) {
    if (!err && !area571BackCaveProblems.length) {
      Problem.create({
        name: problem.name,
        grade: problem.grade,
        description: problem.description,
        FA: problem.FA,
        parentBoulder: "582292e70d8ff325b13e64a9"
      });
    }
  });
});
