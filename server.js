const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.title = "SUP Colorado";

app.locals.destinations = [
    {
        id: 1,
        title: "Alta Lakes",
        image: "https://telluride.com/site/assets/files/9385/1435004793f49c0d.jpg",
        overview: "These three alpine lakes located on the backside of the Telluride Ski Resort have the majesty to make you feel like you’re in the heart of the Swiss Alps. The backdrop makes this a stunning destination for stand up paddle boarding, fishing, hiking, and exploration of the historic structures in the Alta Lakes Ghost Town. We recommend bringing your inflatable stand up paddle board (iSUP) for an easy trek to the shoreline with your favorite SUP pup.", 
        type: "Lake", 
        petsAllowed: "Yes", 
        familyFriendly: "Yes",
        motorBoatsAllowed: "No", 
        cost: "Free",
        location: "Telluride, CO",
        driveTimeFromDenver: "6 hours" 
      },
      {
        id: 2,
        title: "Big Soda Lake",
        image: "https://media.9news.com/assets/KUSA/images/c4663b68-1e95-45fd-bce3-bd22e0e22bf2/c4663b68-1e95-45fd-bce3-bd22e0e22bf2_1140x641.jpg",
        overview: "This gorgeous SUP destination is one of two bodies of water within Bear Creek Lake Park. Big Soda is one of our favorite beginner paddling destinations in Colorado because the lake does not allow motorized watercraft, making it a calm and easy-going paddling experience. We also love the close proximity to the world-famous Red Rocks Amphitheatre. Visitors can expect to pay $10 for entrance to the park that’s open daily from Memorial Day through Labor Day. If you’re unable to bring your own board, you’ll be able to find rental locations — but it’s a first-come, first-served operation, so be sure to call ahead if you’re planning to rent a board.", 
        type: "Lake", 
        petsAllowed: "No", 
        familyFriendly: "Yes",
        motorBoatsAllowed: "No", 
        cost: "$10",
        location: "Morrison, CO",
        driveTimeFromDenver: "30 minutes" 
      },
      {
        id: 3,
        title: "North Star Nature Preserve",
        image: "https://www.northstaraspen.com/uploads/1/3/1/1/13115897/1462897619.png",
        overview: "Floating the Roaring Fork River through North Star is a wonderful way to experience nature. North Star is a nature preserve, where you are one among many species. Please be respectful of the rules and regulations by being quiet, staying on your watercraft and leaving your dog at home.  Stand-up paddleboards, canoes and kayaks are the preferred vessels for floating through the Preserve. The river through North Star flows gently, making it a suitable float for families and beginners. The water, however, is very cold, especially in early summer.", 
        type: "River", 
        petsAllowed: "No", 
        familyFriendly: "Yes",
        motorBoatsAllowed: "No", 
        cost: "Free",
        location: "Aspen, CO",
        driveTimeFromDenver: "3.5 hours" 
      },
      {
        id: 4,
        title: "Lake Estes",
        image: "https://a.cdn-hotels.com/gdcs/production37/d874/9001b3ff-0525-4123-baba-6859017830a8.jpg",
        overview: "Lake Estes is a SUP fishing wonderland where anglers of every skill level can find their fair share of trout. In fact, they’ve been hosting an annual fishing derby here since 1986, so you can imagine the lake is well-stocked. Lakes Estes is best for a weekday visit as the park can get very crowded on weekends, especially during the summer months. We recommend visiting in the fall for the best chance of uncrowded waters — the marina stops renting motorized vessels at the end of summer, leaving the water calmer for paddling and fishing. Local regulations do require you to launch your SUP from the marina as well.", 
        type: "Lake", 
        petsAllowed: "Yes", 
        familyFriendly: "Yes",
        motorBoatsAllowed: "Yes", 
        cost: "$5",
        location: "Estes Park, CO",
        driveTimeFromDenver: "1.5 hours" 
      },
      {
        id: 5,
        title: "Glenwood Whitewater Park",
        image: "",
        overview: "Looking for a little more of a challenge? Check out Glenwood Whitewater Park, in Glenwood, CO, the first of its kind on the Colorado River. This is a great place for advanced-level paddle boarders to practice in a relatively controlled environment. The water park is a three-hour drive from Denver but it provides a great place to test your skills and it’s free for users. After beating yourself up for a bit, check out the Iron Mountain Hot Springs just down the street. The hot spring resort boasts freshwater family pools, sixteen natural hot springs pools, and an elevated whirlpool spa with a calming waterfall where you can relax, restore and rejuvenate in the iron-rich thermal waters.", 
        type: "River", 
        petsAllowed: "", 
        familyFriendly: "No",
        motorBoatsAllowed: "No", 
        cost: "",
        location: "Glenwood, CO",
        driveTimeFromDenver: "2.5 hours" 
      },
      {
        id: 6,
        title: "",
        image: "",
        overview: "", 
        type: "", 
        petsAllowed: "", 
        familyFriendly: "",
        motorBoatsAllowed: "", 
        cost: "",
        location: "",
        driveTimeFromDenver: "" 
      },
      {
        id: 7,
        title: "",
        image: "",
        overview: "", 
        type: "", 
        petsAllowed: "", 
        familyFriendly: "",
        motorBoatsAllowed: "", 
        cost: "",
        location: "",
        driveTimeFromDenver: "" 
      },
      {
        id: 8,
        title: "",
        image: "",
        overview: "", 
        type: "", 
        petsAllowed: "", 
        familyFriendly: "",
        motorBoatsAllowed: "", 
        cost: "",
        location: "",
        driveTimeFromDenver: "" 
      },
      {
        id: 9,
        title: "",
        image: "",
        overview: "", 
        type: "", 
        petsAllowed: "", 
        familyFriendly: "",
        motorBoatsAllowed: "", 
        cost: "",
        location: "",
        driveTimeFromDenver: "" 
      },
      {
        id: 10,
        title: "",
        image: "",
        overview: "", 
        type: "", 
        petsAllowed: "", 
        familyFriendly: "",
        motorBoatsAllowed: "", 
        cost: "",
        location: "",
        driveTimeFromDenver: "" 
      },
]

app.locals.reviews = [
    {
        id: 1,
        name: "Outdoor Eddy",
        review: "I loved SUPing the Slate River!  This is a must do for paddleboard enthusiasts!",
      },
      {
        id: 2,
        name: "Paddling Patty",
        review: "Dillon Reservoir is a beautiful paddleboard destination!  The entire family enjoyed the adventure.",
      },
    ]



app.get('/api/v1/destinations', (request, response) => {
    const destination = app.locals.destinations;

    response.json({ destination })
});

app.get('/api/v1/reviews', (request, response) => {
    const review = app.locals.reviews;

    response.json({ review })
});


app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
});