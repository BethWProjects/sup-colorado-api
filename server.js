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
        motorBoatsAllowed: "Yes", 
        cost: "$5",
        location: "Estes Park, CO",
        driveTimeFromDenver: "1.5 hours" 
      },
      {
        id: 5,
        title: "Colorado River",
        image: "https://bearfoottheory.com/wp-content/uploads/2021/08/Glenwood-Whitewanter-Park.jpeg",
        overview: "Looking for a little more of a challenge? Check out Glenwood Whitewater Park, in Glenwood, CO, the first of its kind on the Colorado River. This is a great place for advanced-level paddle boarders to practice in a relatively controlled environment. The water park is a three-hour drive from Denver but it provides a great place to test your skills and it’s free for users. After beating yourself up for a bit, check out the Iron Mountain Hot Springs just down the street. The hot spring resort boasts freshwater family pools, sixteen natural hot springs pools, and an elevated whirlpool spa with a calming waterfall where you can relax, restore and rejuvenate in the iron-rich thermal waters.", 
        type: "River", 
        petsAllowed: "Yes", 
        motorBoatsAllowed: "No", 
        cost: "Free",
        location: "Glenwood, CO",
        driveTimeFromDenver: "2.5 hours" 
      },
      {
        id: 6,
        title: "Blue Mesa Reservoir",
        image: "https://gunnisoncrestedbutte.com/wp-content/uploads/JCash_GCB_Summer16_V7A9892.jpg",
        overview: "This massive 29-mile-long reservoir is Colorado’s largest body of water. But its size isn’t what makes it so appealing — it’s the multitude of arms that lead into secluded canyons ripe for exploration from the top of your stand up paddle board. In fact, there’s so much to see and explore that even die-hard paddle boarders like us would be tempted to rent a boat or do some horseback riding to see it all.", 
        type: "Lake", 
        petsAllowed: "Yes", 
        motorBoatsAllowed: "Yes", 
        cost: "Free",
        location: "Gunnison, CO",
        driveTimeFromDenver: "4 hours" 
      },
      {
        id: 7,
        title: "Slate River",
        image: "https://images.squarespace-cdn.com/content/v1/5707bd62b654f9540cad0a50/ce2f0ae5-09a2-49bb-a6f8-53bd51d2f0a0/stand+up+paddling+slate+river+crested+butte.jpg",
        overview: "Slate River is an adventure unlike any other, surrounded by delicate local wildlife and private property alike. The river winds through pristine conservation areas with gorgeous natural views (grab your camera for this adventure). However, it also passes through many stretches of private property, in which the land surrounding the river is off limits for paddlers - so be prepared to stay on your board for long stretches of time! The river’s unique beauty is well worth its quirks. Make sure to check the water levels. Anything above 400 Cubic Feet per Second (cfs) is considered high. Be aware of the cattle fence on the Lower Slate River. Lay flat on your board or portage around it, but do not cut the fence - the fence keeps the cows safe.", 
        type: "River", 
        petsAllowed: "No", 
        motorBoatsAllowed: "No", 
        cost: "Free",
        location: "Crested Butte, CO",
        driveTimeFromDenver: "4.5 hours" 
      },
      {
        id: 8,
        title: "Lake Dillon",
        image: "https://summitrentals.com/sites/default/files/styles/full_width_banner_image/public/things-to-do-banner-image/paddleboarding_page.jpg",
        overview: "This Summit County hotspot is home to several annual regattas, which are a delight to watch. If you love to be in the center of the action, this is your spot. Dillon Reservoir is surrounded by several nearby campgrounds, so if you’re into camping, this is a great spot to visit. The reservoir is strict about safety - one Coast Guard approved PFD for each person must be on board your SUP at all times - so be prepared and stay safe!", 
        type: "Lake", 
        petsAllowed: "Yes", 
        motorBoatsAllowed: "Yes", 
        cost: "Free",
        location: "Dillon, CO",
        driveTimeFromDenver: "1.25 hours" 
      },
      {
        id: 9,
        title: "Grand Lake",
        image: "https://cdnstep-americantownscom.netdna-ssl.com/img/article/co-paddleboard-1.jpg",
        overview: "Colorado’s largest natural lake is indeed grand, offering some of the world’s best mountain views from the top of a paddle board. The quaint town of Grand Lake is home to less than 500 residents, which means you’ll have ample space to yourself on this tranquil body of water. Visitors can rent a SUP at the marina for a steep $20/hour, but you won’t be able to paddle with your pet unless you bring your own board.", 
        type: "Lake", 
        petsAllowed: "Yes", 
        motorBoatsAllowed: "No", 
        cost: "$35",
        location: "Grand Lake, CO",
        driveTimeFromDenver: "2.5 hours" 
      },
      {
        id: 10,
        title: "North Pond Park",
        image: "https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/9/f3/9f338f18-ebf2-11eb-9a83-dfbc3b2a08ce/60fb23350d04f.image.png",
        overview: "In Silverthorne, locals head to North Pond Park to SUP while soaking in the sun and the views. North Pond Park is a unique mountain wetland and pond area that is home to nesting osprey and quality fishing. The sandy beach and calm waters make it the perfect spot for beginners. The more adventurous might consider SUP-ing down the Blue River which winds through the heart of downtown Silverthorne.", 
        type: "Lake", 
        petsAllowed: "Yes", 
        motorBoatsAllowed: "No", 
        cost: "Free",
        location: "Silverthorne, CO",
        driveTimeFromDenver: "1.25 hours" 
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

module.exports = app;