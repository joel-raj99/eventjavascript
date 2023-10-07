document.getElementById("try").addEventListener("mousedown",btnpressed)
document.getElementById("try").addEventListener("mouseup",btnup)
function btnpressed()
{
    document.getElementById("try").innerHTML="buttonpressed";

}
function btnup()
{
    document.getElementById("try").innerHTML="buttonreleased";
}