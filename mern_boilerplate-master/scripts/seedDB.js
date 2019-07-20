/* eslint-disable quotes */
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://localhost/brewingrecipes",
);

const methodSeed = [
  {
    method : "Moka Pot",
    grind_size : "Extra Fine",
    ground_coffee : "18g",
    water : "200ml",
    paper_filter : "No",
    ending_cups : "1 cup",
    other_equipment : [
      {
        stove : "Stove top burner"
      },
      {
        spoon : 1
      },
      {
        kettle : 1
      }
    ],
    preparation : [
      {
        step1 : "Boil the kettle"
      },
      {
        step2 : "Weigh out the coffee and grind it"
      },
      {
        step3 : "Pour water into the bottom compartment"
      },
      {
        step4 : "Add the coffee into the metal filter basket"
      },
      {
        step5 : "Place the filter basket into the bottom compartment"
      },
      {
        step6 : "Screw on the Moka Pot’s spouted top"
      },
      {
        step7 : "Place the Moka Pot onto a stove"
      },
      {
        step8 : "You’re all set!"
      }
    ],
    instructions : [
      {
        step1 : "Fill the lower chamber with boiling water just below the valve"
      },
      {
        step2 : "Insert the funnel an fill it with ground coffee"
      },
      {
        step3 : "Tightly screw the upper part of the pot onto the base"
      },
      {
        step4 : "Put the brewer on a stove and turn on medium heat"
      },
      {
        step5 : "Wait approx. 5 to 6 minutes for the water to boil"
      },
      {
        step6 : "Once the top of the pot is full, remove from the stove and pout into a cup. Enjoy!"
      },
      {
        step7 : "Pour the remaining 200g of water to dilute the dose to taste"
      }
    ],
    difficulty : "Medium",
    information : "The Moka Pot, also known as a macchinetta, literally: small machine, is a stove-top or electric coffee maker that produces coffee by passing boiling water pressurized by steam through ground coffee. It was patented for the first time in Italy by the inventor Luigi De Ponti for Alfonso Bialetti in 1933"
  },
  {
    method : "Hario V60",
    grind_size : "Medium",
    ground_coffee : "13g",
    water : "220ml",
    paper_filter : "Yes",
    ending_cups : "1 cup",
    other_equipment : [
      {
        kitchen_scale : 1
      },
      {
        spoon : 1
      },
      {
        kettle : 1
      }
    ],
    preparation : [
      {
        step1 : "Boil the kettle"
      },
      {
        step2 : "Weigh out the coffee and grind it"
      },
      {
        step3 : " Place the cup/vessel onto the scale "
      },
      {
        step4 : " Place the dripper on top of the cup "
      },
      {
        step5 : " Open the paper filter to form a cone shape "
      },
      {
        step6 : " Put the paper filter into the dripper "
      },
      {
        step7 : " Pour a little water into the filter paper to wet it "
      },
      {
        step8 : " Discard the water once it has drained through the paper filter "
      },
      {
        step9 : " Add the coffee in to the paper filter "
      },
      {
        step10 : " Turn on the scale ensuring it reads 0g"
      },
      {
        step11 : " You’re all set! "
      }
    ],
    instructions : [
      {
        step1 : " Pour 50g of water until all the grounds are evenly saturated "
      },
      {
        step2 : " Wait 30 seconds for the coffee to bloom "
      },
      {
        step3 : " Pour another 50g of water in a spiral rotation "
      },
      {
        step4 : " Wait for the water to drain through the grounds "
      },
      {
        step5 : " Pour the remaining 120g of water around the edges of the dripper "
      },
      {
        step6 : " Let the water drain through and when it’s done discard the filter and serve "
      }
    ],
    difficulty : "Hard",
    information : "The Hario V60 is the first coffee maker that combines affordability and simplicity with the ability to produce top quality coffee"
  },
    {
        method : "Bonmac Dripper",
        grind_size : "Medium",
        ground_coffee : "15g",
        water : "250ml",
        paper_filter : "Yes",
        ending_cups : "1 cup",
        other_equipment : [
            {
                kitchen_scale : 1
            },
            {
                spoon : 1
            },
            {
                kettle : 1
            }
        ],
        preparation : [
            {
                step1 : " Boil the kettle "
            },
            {
                step2 : "Weigh out the coffee and grind it"
            },
            {
                step3 : " Place the cup/vessel onto the scale "
            },
            {
                step4 : " Place the dripper on top of the cup "
            },
            {
                step5 : " Open the paper filter to form a cone shape "
            },
            {
                step6 : " Put the paper filter into the dripper "
            },
            {
                step7 : " Pour a little water into the filter paper to wet it "
            },
            {
                step8 : " Discard the water once it has drained through the paper filter "
            },
            {
                step9 : " Add the coffee in to the paper filter "
            },
            {
                step10 : " Turn on the scale ensuring it reads 0g"
            },
            {
                step11 : " You’re all set! "
            }
        ],
        instructions : [
            {
                step1 : " Pour 50g of water until all the grounds are evenly saturated "
            },
            {
                step2 : " Stir the grounds to ensure all coffee is fully immersed "
            },
            {
                step3 : " Wait 30 seconds for the coffee to bloom "
            },
            {
                step4 : " Pour another 100g of water in a spiral rotation "
            },
            {
                step5 : " Wait for the water to drain through the grounds "
            },
            {
                step6 : " Pour the remaining 1100g of water around the edges of the dripper "
            },
            {
                step7 : " Let the water drain through and when it’s done discard the filter and serve "
            }
        ],
        difficulty : "Medium",
        information : "The Bonmac pour-over is one of many pour-over methods. The difference is the grooved sides, and small drip holes allow for the coffee to steep slightly longer creating more depth and body in your cup"
    },    
    {
        method : "Bee House Dripper",
        grind_size : "Medium",
        ground_coffee : "15g",
        water : "250ml",
        paper_filter : "Yes",
        ending_cups : "1 cup",
        other_equipment : [
            {
                kitchen_scale : 1
            },
            {
                spoon : 1
            },
            {
                kettle : 1
            }
        ],
        preparation : [
            {
                step1 : " Boil the kettle "
            },
            {
                step2 : "Weigh out the coffee and grind it"
            },
            {
                step3 : " Place the cup/vessel onto the scale "
            },
            {
                step4 : " Place the dripper on top of the cup "
            },
            {
                step5 : " Open the paper filter to form a cone shape "
            },
            {
                step6 : " Put the paper filter into the dripper "
            },
            {
                step7 : " Pour a little water into the filter paper to wet it "
            },
            {
                step8 : " Discard the water once it has drained through the paper filter "
            },
            {
                step9 : " Add the coffee in to the paper filter "
            },
            {
                step10 : " Turn on the scale ensuring it reads 0g"
            },
            {
                step11 : " You’re all set! "
            }
        ],
        instructions : [
            {
                step1 : " Pour 50g of water until all the grounds are evenly saturated "
            },
            {
                step2 : " Stir the grounds to ensure all coffee is fully immersed "
            },
            {
                step3 : " Wait 30 seconds for the coffee to bloom "
            },
            {
                step4 : " Pour another 100g of water in a spiral rotation "
            },
            {
                step5 : " Wait for the water to drain through the grounds "
            },
            {
                step6 : " Pour the remaining 100g of water around the edges of the dripper "
            },
            {
                step7 : " Let the water drain through and when it’s done discard the filter and serve "
            }
        ],
        difficulty : "Hard",
        information : "A Japanese update on a classic paper cone brewer invented by Melitta Bentz in 1908. Mrs. Bentz used her son’s blotting paper and a punctured brass pot - you can now find its Melitta filter use about everywhere"
    },    
    {
        method : "Kalita Wave",
        grind_size : "Medium",
        ground_coffee : "15g",
        water : "250ml",
        paper_filter : "Yes",
        ending_cups : "1 cup",
        other_equipment : [
            {
                kitchen_scale : 1
            },
            {
                spoon : 1
            },
            {
                kettle : 1
            }
        ],
        preparation : [
            {
                step1 : " Boil the kettle "
            },
            {
                step2 : "Weigh out the coffee and grind it"
            },
            {
                step3 : " Place the cup/vessel onto the scale "
            },
            {
                step4 : " Place the dripper on top of the cup "
            },
            {
                step5 : " Put the paper filter into the dripper "
            },
            {
                step6 : " Pour a little water into the filter paper to wet it "
            },
            {
                step7 : " Discard the water once it has drained through the paper filter "
            },
            {
                step8 : " Add the coffee in to the paper filter "
            },
            {
                step9 : " Turn on the scale ensuring it reads 0g"
            },
            {
                step10 : " You’re all set! "
            }
        ],
        instructions : [
            {
                step1 : " Pour 50g of water until all the grounds are evenly saturated "
            },
            {
                step2 : " Wait 30 seconds for the coffee to bloom "
            },
            {
                step3 : " Pour another 100g of water in a spiral rotation "
            },
            {
                step4 : " Wait for the water to drain through the grounds "
            },
            {
                step5 : " Pour the remaining 100g of water around the edges of the dripper "
            },
            {
                step6 : " Let the water drain through and when it’s done discard the filter and serve "
            }
        ],
        difficulty : "Hard",
        information: "The Kalita Wave Dripper is a pour-over coffee brewer from Japan with a flat bottom design. The flat bottom design is for a more even extraction"
    },
  {
    method: "Chemex",
    grind_size: "Medium",
    ground_coffee: "25g",
    water: "340ml",
    paper_filter: "Yes",
    ending_cups: "1 cup",
    other_equipment: [
      {
        kitchen_scale: 1
      },
      {
        spoon: 1
      },
      {
        kettle: 1
      }
    ],
    preparation: [
      {
        step1: " Boil the kettle "
      },
      {
        step2: "Weigh out the coffee and grind it"
      },
      {
        step3: " Place the chemex onto the scale "
      },
      {
        step4: " Fold the paper filter in half and form a cone "
      },
      {
        step5: " Put the paper filter into the Chemex "
      },
      {
        step6: " Pour a little water into the filter paper to wet it "
      },
      {
        step7: " Discard the water once it has drained through the paper filter "
      },
      {
        step8: " Add the coffee in to the paper filter "
      },
      {
        step9: " Turn on the scale ensuring it reads 0g"
      },
      {
        step10: " You’re all set! "
      }
    ],
    instructions: [
      {
        step1: " Pour 50g of water until all the grounds are evenly saturated "
      },
      {
        step2: " Stir the grounds to ensure all coffee is fully immersed "
      },
      {
        step2: " Wait 15 seconds for the coffee to bloom "
      },
      {
        step3: " Pour another 130g of water in a spiral rotation over the dark areas "
      },
      {
        step4: " Wait for the water to drain through the grounds "
      },
      {
        step5: " Pour the another 160g of water around the edges of the dripper "
      },
      {
        step6: " Let the water drain through and when it’s done discard the filter and serve "
      }
    ],
    difficulty: "Hard",
    information: "An iconic brewer with timeless design invented in 1941, the Chemex is easy to use and easy on the eyes"
  },
  {
    method: "Siphon",
    grind_size: "Fine",
    ground_coffee: "20g",
    water: "300ml",
    paper_filter: "No",
    ending_cups: "1 cup",
    other_equipment: [
      {
        butane_burner: 1
      },
      {
        spoon: 1
      },
      {
        kettle: 1
      }
    ],
    preparation: [
      {
        step1: " Boil the kettle "
      },
      {
        step2: "Weigh out the coffee and grind it"
      },
      {
        step3: " Soak the cloth filter in warm water and drop it in the top compartment "
      },
      {
        step4: " Pour hot water into the bottom glass component "
      },
      {
        step5: " Place the top chamber at an angle into the bottom component "
      },
      {
        step6: " Put the burner under the bottom glass chamber "
      },
      {
        step7: " Allow the water to come to a boiling point "
      },
      {
        step8: " Add coffee to the top chamber "
      },
      {
        step10: " You’re all set! "
      }
    ],
    instructions: [
      {
        step1: " Allow the coffee to brew for one minute "
      },
      {
        step2: " Turn off the burner and remove it from under the siphon "
      },
      {
        step2: " Let the coffee drip down to the bottom chamber "
      },
      {
        step3: " Remove the top piece and serve the coffee "
      }
    ],
    difficulty: "Hard",
    information: "Siphon coffee was invented in the 1840’s more or less simultaneously by a French housewife and a Scottish marine engineer"
  },
  {
    method: "Clever Dripper",
    grind_size: "Medium",
    ground_coffee: "20g",
    water: "300ml",
    paper_filter: "Yes",
    ending_cups: "1 cup",
    other_equipment: [
      {
        kitchen_scale: 1
      },
      {
        spoon: 1
      },
      {
        kettle: 1
      }
    ],
    preparation: [
      {
        step1: " Boil the kettle "
      },
      {
        step2: "Weigh out the coffee and grind it"
      },
      {
        step3: " Fold the filter along the bonded seams and insert into the Clever brewer "
      },
      {
        step10: " You’re all set! "
      }
    
    ],
    instructions: [
      {
        step1: " Rinse the filter with hot water. Leaving the filter in place, discard the water "
      },
      {
        step2: " Pour the ground coffee into the filter, giving a gentle shake to settle the grounds. Place the Clever onto your scale and tare to 0 grams. "
      },
    
      {
        step3: " Start a timer. Carefully pour 300 grams of brewing water over the grounds "
      },
      {
        step4: " Let stand for 30 seconds, allowing the coffee to absorb the water. Give a quick, gentle stir to evenly immerse the grounds into the brew. Cover the Clever with its lid "
      },
      {
        step5: " At 2 minutes, set the Clever atop a mug to release the brew. This process should take about 1-1:30 minutes."
      },
      {
        step6: " Let stand for 30 seconds, allowing the coffee to absorb the water. Give a quick, gentle stir to evenly immerse the grounds into the brew. Cover the Clever with its lid "
      },
      {
        step7: "Remove and discard the filter and brewed grounds. Drink up! "
      },
    ],
    difficulty: "Easy",
    information: "The Clever Dripper couples the ease and control attainable with a full-immersion brewing device with the cleaner profile of paper filter brewing."
  },
  {
    method: "Drip Coffee machine",
    grind_size: "Medium",
    ground_coffee: "17g",
    water: "270ml",
    paper_filter: "Yes",
    ending_cups: "1 cup",
    other_equipment: [
      {
        kitchen_scale: 1
      },
      {
        spoon: 1
      }
    ],
    preparation: [
      {
        step1: " Measure out water "
      }
      {
        step2: "Weigh out the coffee and grind it"
      }

    ],
    instructions: [
      {
        step1: " Place filter in top chamber of drip machine "
      },
      {
        step2: " Pour coffee grinds into filter "
      },
      {
        step2: " Pour water into drip machine’s reservoir "
      },
      {
        step3: " Hit the start button "
      },

    ],
    difficulty: "Easy",
    information: "In 1954 the Wigomat, invented by Gottlob Widmann, was patented in Germany being the first electrical drip brewer. Drip brew coffee makers replaced the percolator in the 1970s due to the percolators' tendency to over-extract coffee, thereby making it bitter"
  }
];

db.Method
  //.remove({})
  .then(() => db.Method.collection.insertMany(methodSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
