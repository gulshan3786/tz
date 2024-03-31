const express = require("express");
const connection = require("./db");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = 4000;
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/data", (req, res) => {
  var sql = `select timezone from timezones`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});
app.post("/data", async (req, res) => {
  const formdata = req.body;
  console.log("sad", formdata);
  const datetime = formdata.datetime;
//   const ftz = req.body.fTimezone[0];
  const ttz = req.body.tTimezone;
  //   console.log(datetime);
  //   console.log(ftz);
  //   const offset = ftz;
  //   console.log(offset);

  // console.log(req.body.fTimezone)
  // const sourceDate = new Date(datetime);
  // console.log(sourceDate)
  // datetime, sourceTimezone
  // const sourceOffset = getTimezoneOffset(datetime,ftz);
  // console.log(sourceOffset)

  const date = new Date(datetime);
  const date1 = new Date(datetime).toLocaleString();
  console.log(date);
  console.log("india", date1);
  console.log("india offset", date.getTimezoneOffset());

  const options = { timeZone: ttz };
  console.log("options", options);

  const dateString = date.toLocaleString("en-US", options);
  console.log("kathmandu", dateString);
  res.json({dateString});

  // const kathmandu_dt=new Date(dateString).toLocaleString();
  // console.log("kathmandu",kathmandu_dt)

  // const kathmandu_date = new Date(dateString);
  // console.log("kathmandu_utc",kathmandu_date)
  // console.log("kathmandu offset",kathmandu_date.getTimezoneOffset())

//   function getTimeZoneOffset(timezone) {
//     var now = new Date();
//     var localOffset = now.getTimezoneOffset(); // Offset in minutes from UTC for local time zone
//     var targetOffset = new Date(
//       now.toLocaleString("en-US", { timeZone: timezone })
//     ).getTimezoneOffset(); // Offset in minutes from UTC for the target time zone
//     var offsetDifference = localOffset - targetOffset; // Difference in minutes between local time zone and target time zone
//     return offsetDifference;
//   }

  // const kathmandu_offset = kathmandu_date.getTimezoneOffset();

  // console.log("Kathmandu timezone offset:", kathmandu_offset);
  // const kathmandu_dt1=kathmandu_dt.getTimezoneOffset();
  // const kathmandu_dt1=new Date(kathmandu_dt).getTimezoneOffset();
  // console.log(kathmandu_dt1)

  //   console.log("kthoffset",dateString.getTimezoneOffset())
  //   const targetDate = new Date(dateString);

  //   console.log("dd", targetDate.toLocaleString("en-US", options));

  //   const targetOffset = targetDate.getTimezoneOffset();
  //   console.log(targetOffset);

  //   const localMilliseconds = targetDate.getTime() + targetOffset * 60000; // Convert minutes to milliseconds
  //   const localDate = new Date(localMilliseconds).toLocaleString();

  //   console.log("Adjusted to local time:", localDate);

  // function getTimezoneOffset(timezone) {
  //     const date = new Date();
  //     const dateString = date.toLocaleString('en', { timeZone: timezone });
  //     const localDate = new Date(dateString);
  //     return localDate.getTimezoneOffset();
  // }
  // const date=new Date();
  // console.log("gsdg",date)
  // const date = new Date(datetime);
  // console.log(date)
  // const options = { timeZone: ftz };
  // const dateString=date.toLocaleString('en-US', options);
  // const targetDate = new Date(dateString).toLocaleString();
  // console.log("dd",targetDate)
  // console.group(target_date)
  // const date1 = new Date(datetime).toLocaleString('en-US', options);
  // console.log("dsd",date)

  // console.log("gsdg", date.toLocaleString())
  // const options = { timeZone: ftz };
  //   const date1 = date.toLocaleString("en-US", options);

  // const options = { timeZone: ftz };
  // const dateString1 = date1.toLocaleString('en-US', options);
  // console.log(dateString1);
  // const targetDate = new Date(dateString1);
  // console.log(targetDate)
  // const dateString = date.toLocaleString('en', { timeZone: ftz });
  // console.log("dhh",dateString)

  // const date1=new Date(dateString);
  // console.log("dwbbd",date1)
  // const datestring2=date1.toLocaleString('en',{timezone:ttz});
  // console.log("sdas",datestring2)

  
});
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app is listening on port ${port}`);
});
