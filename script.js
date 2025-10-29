

let sidenavHTML =
   '<div class="sidenav">' +
            '<a href="games.html"><logo><img src="images/logo.png" alt="Logo"></logo>' +
            '<logotext>organzola</logotext></a>' +
            
            '<a href="games.html"><navtext>games</navtext></a>'+
            //'<a href="art.html"><navtext>art</navtext></a>'+
            //'<a href="blog.html"><navtext>blog</navtext></a>'+
            '<a href="about.html"><navtext>about</navtext></a>'+
            '<socials>'+
            '<a href="https://bsky.app/profile/organzola.games"><img src="images/bsky.png" alt="Bluesky" style="width:45px;height:45px;margin-right:20px;"></a>'+
            //'<a href="https://www.linkedin.com/in/drew-shapiro-949604272/"><img src="images/linkedin.png" alt="LinkedIn" style="width:50px;height:50px;"></a>'+
            '<a href="mailto:drewshap@gmail.com"><img src="images/at.png" alt="E-Mail" style="width:45px;height:45px;padding-left:5px;"></a>'+
            '</socials>'+
        '</div>';

if (document.getElementById("nav")) {
  document.getElementById("nav").innerHTML = sidenavHTML;
}