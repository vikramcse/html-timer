(function () {
  var days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  function time () {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var day = days[date.getDay()];
    var month = months[date.getMonth()];
    var year = date.getFullYear();

    var newM = format(m);
    var newS = format(s);

    var finalDay = day + ', ' + month + ' ' + year;
    // console.log(finalDay);
    var finalTime = h + ':' + newM + ':' + newS;

    setTimeout(time, 1000);

    document.getElementById('day').innerHTML = finalDay;
    document.getElementById('time').innerHTML = finalTime;
  }

  function format (num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

  time();
})();
