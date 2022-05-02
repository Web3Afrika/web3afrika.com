// const endDate = new Date().getTime() + 1000800000;
const endDate = new Date().getTime() + 3000800000;

const x = setInterval(function () {
  const now = new Date().getTime();

  const timeRemaining = endDate - now;

  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesRemaining = Math.floor(
    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = daysRemaining;
  document.getElementById("hours").innerHTML = hoursRemaining;
  document.getElementById("minutes").innerHTML = minutesRemaining;
  document.getElementById("seconds").innerHTML = secondsRemaining;

  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    alert("Thank you for your patience");
  }
}, 1000);
