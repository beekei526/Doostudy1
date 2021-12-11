var RecentLoginCon=document.getElementsByClassName("recent-login")[0];
RecentLoginCon.style.backgroundImage="url('bekei.jpg')";
RecentLoginCon.style.filter="blur(40%)";
var getmorebutton=document.getElementById("more-language");
getmorebutton.style.display="none";
function ShowMoreLang(){
    var getmorebutton=document.getElementById("more-language");
    getmorebutton.style.display="block";
}
function RemoveRecentlogin(){
    var recentloginremover=document.getElementsByClassName("recent-login")[0];
       recentloginremover.remove();
}
function recentLogged(){
var recentLoginNew=document.createElement('div');
recentLoginNew.append("hello new recent user");
recentLoginNew.setAttribute("class","recent-login");
document.getElementsByClassName("recent-login-block")[0].append(recentLoginNew);
var IncDiv=document.getElementsByClassName("recent-login-block")[0];
IncDiv.style.width="650px";
}