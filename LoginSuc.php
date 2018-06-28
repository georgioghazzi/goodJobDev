<link rel="stylesheet" type="text/css" href="CSS/Web.css"><meta http-equiv=\"refresh\" content=\"5;url=http://Login.php">
<center><font size=10px color=#4CAF50>
<Strong>Login Successful<br>
Redirecting in <span id="seconds">2</span> seconds</Strong></center>
<script>
	var seconds = 2; 
var foo; 

function redirect() {
    document.location.href = 'dwp-vote.php';
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();
</script>