const netest = require("netest")

const netestOptions = {
   slowSpeedThreshold: 100,
   numOfChecks: 3,
   failIfTooLong: true,
   timeUntilLoadFailure: 60000,
   loadFailureCheckInterval: 2000,
   imageSource: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Pizigani_1367_Chart_1MB.jpg",
   imageSize: 1040
};

netest(netestOptions).then((result) => {
    console.log(result);
   if (!result.isSlow) console.log("Your internet is great!");
}).catch((error) => {
    console.log(error);
   if (error.hasFailed) console.log("Too bad, your internet sucks...")
});