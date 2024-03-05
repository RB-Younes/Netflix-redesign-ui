var nb_BG = 0;
var animationInProgress = false;
function reply_click(clicked_id)
  {
    if (animationInProgress) {
      return;
    }
    animationInProgress = true;
    var t = 0;
    if(nb_BG == 0){

      //lancer l'animation inverse
      document.getElementById("BG").className = "background-container fade-out-background";
      document.getElementById("f-logo").className = "film-logo fade-out"
      document.getElementById("play-btn").className = "play fade-out"
      document.getElementById("info-btn").className = "More-info fade-out"
      document.getElementById("film-title").className = "film-title fade-out"
      document.getElementById("Tags").className = "Tags fade-out"
      document.getElementById("desc").className = "desc fade-out"
      document.getElementById("supp1").className = "fade-out"
      document.getElementById("supp2").className = "fade-out"
      document.getElementById("supp3").className = "fade-out"
      document.getElementById("supp4").className = "fade-out"
 
    //attendre la fin pour lancer l'animation principale
      setTimeout(function() {
        document.getElementById("BG").style.backgroundImage = "url('../BGS/you bg.jpg')";
        document.getElementById("BG").className = "background-container fade-in-background";
        
        
        setTimeout(function() { 
          document.getElementById("film-title").remove(); 
          document.getElementById("Tags").remove();
          document.getElementById("desc").remove();
          document.getElementById("supp1").remove(); 
          document.getElementById("supp2").remove();
          document.getElementById("supp3").remove();
          document.getElementById("supp4").remove();
          document.getElementById("ds-cont").remove(); 
          document.getElementById("cont-home").className = "content-home-You";
          document.getElementById("f-logo").className = "film-logo-You fade-in";
          document.getElementById("f-logo").src= "movies logos/you logopng.png";
          document.getElementById("play-btn").className = "play fade-in";
          document.getElementById("info-btn").className = "More-info fade-in";
        
          animationInProgress = false;
        }, 500);
        
      }, 1000);
      t=1
    }

    if(nb_BG == 1){
      //lancer l'animation inverse
      document.getElementById("BG").className = "background-container fade-out-background";
      document.getElementById("f-logo").className = "film-logo-You fade-out"
      document.getElementById("play-btn").className = "play fade-out"
      document.getElementById("info-btn").className = "More-info fade-out"
      
    //attendre la fin pour lancer l'animation principale
      setTimeout(function() {
        document.getElementById("BG").style.backgroundImage = "url('/BGS/wednsday BG.jpg')";
        document.getElementById("BG").className = "background-container fade-in-background";

        setTimeout(function() { 

          var parentDiv = document.getElementById("cont-home-desc");
          var newContent = document.createElement('div');
          newContent.innerHTML = `<div id="ds-cont" class="desc-cont">
              <h1 id="film-title" class="film-title">
                Wednesday
              </h1>
              <div id="Tags" class="Tags">
                2022 | Maturity Rating:13+ | 1 Season | Fantasy
              </div>
             <div id="desc" class="desc">
             Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.             </div>
             <div class="author">
              <div style="display: flex; flex-direction: row;">
                <p id="supp1" style=" color: rgb(180, 180, 180);">Starring:</p> <p id="supp3" id="Starring" style="margin-left: 7px;">Jenna Ortega, Gwendoline Christie, Riki Lindhome</p> 
              </div>
              <div style="display: flex; flex-direction: row;">
                <p id="supp2" style=" color: rgb(180, 180, 180);">Creators:</p><p id="supp4" id="Creators"  style="margin-left: 7px;">Alfred Gough, Miles Millar</p>
              </div>
  
             </div>
            </div>`;
            parentDiv.appendChild(newContent);
          document.getElementById("film-title").className = "film-title fade-in"
          document.getElementById("Tags").className = "Tags fade-in"
          document.getElementById("desc").className = "desc fade-in"
          document.getElementById("supp1").className = "fade-in"
          document.getElementById("supp2").className = "fade-in"
          document.getElementById("supp3").className = "fade-in"
          document.getElementById("supp4").className = "fade-in"
     
          document.getElementById("cont-home").className = "content-home-Wednsday";
          document.getElementById("f-logo").className = "film-logo fade-in";
          document.getElementById("f-logo").src= "movies logos/Wednsday.png";
          document.getElementById("play-btn").className = "play fade-in";
          document.getElementById("info-btn").className = "More-info fade-in";
          animationInProgress = false;
        }, 500);
        
      }, 1000);
      
      t =2 ;
    }


    if(nb_BG == 2){

      //lancer l'animation inverse
      document.getElementById("BG").className = "background-container fade-out-background";
      document.getElementById("f-logo").className = "film-logo fade-out"
      document.getElementById("play-btn").className = "play fade-out"
      document.getElementById("info-btn").className = "More-info fade-out"
      document.getElementById("film-title").className = "film-title fade-out"
      document.getElementById("Tags").className = "Tags fade-out"
      document.getElementById("desc").className = "desc fade-out"
      document.getElementById("supp1").className = "fade-out"
      document.getElementById("supp2").className = "fade-out"
      document.getElementById("supp3").className = "fade-out"
      document.getElementById("supp4").className = "fade-out"
     
    //attendre la fin pour lancer l'animation principale
      setTimeout(function() {
        document.getElementById("BG").style.backgroundImage = "url('../BGS/the crwon BG.jpg')";
        document.getElementById("BG").className = "background-container fade-in-background";

        setTimeout(function() { 
          document.getElementById("film-title").remove(); 
          document.getElementById("Tags").remove();
          document.getElementById("desc").remove();
          document.getElementById("supp1").remove(); 
          document.getElementById("supp2").remove();
          document.getElementById("supp3").remove();
          document.getElementById("supp4").remove();
          document.getElementById("ds-cont").remove(); 
          document.getElementById("cont-home").className = "content-home-You";
          document.getElementById("f-logo").className = "film-logo-You fade-in";
          document.getElementById("f-logo").src= "movies logos/the crown logo.png";
          document.getElementById("play-btn").className = "play fade-in";
          document.getElementById("info-btn").className = "More-info fade-in";
          animationInProgress = false;
        }, 500);

      }, 1000);
      t=3
    }

    if(nb_BG == 3){
      //lancer l'animation inverse
      document.getElementById("BG").className = "background-container fade-out-background";
      document.getElementById("f-logo").className = "film-logo-You fade-out"
      document.getElementById("play-btn").className = "play fade-out"
      document.getElementById("info-btn").className = "More-info fade-out"

    //attendre la fin pour lancer l'animation principale
      setTimeout(function() {
        document.getElementById("BG").style.backgroundImage = "url('../BGS/wallpapersden.com_netflix-the-sinner_1920x1080.jpg')";
        document.getElementById("BG").className = "background-container fade-in-background";

        setTimeout(function() { 
          var parentDiv = document.getElementById("cont-home-desc");
          var newContent = document.createElement('div');
          newContent.innerHTML = ` <div id="ds-cont" class="desc-cont">
          <h1 id="film-title" class="film-title">
            The Sinner
          </h1>
          <div id="Tags" class="Tags">
            2017 | Maturity Rating:16+ | 4 Seasons | Thriller
          </div>
         <div id="desc" class="desc">
          In a small New York town, a haunted detective hunts for answers about perplexing crimes while wrestling with his own demons.
         </div>
         <div class="author">
          <div style="display: flex; flex-direction: row;">
            <p id="supp1" style=" color: rgb(180, 180, 180);">Starring:</p> <p id="supp3" id="Starring" style="margin-left: 7px;">Bill Pullman, Jessica Biel, Carrie Coon</p> 
          </div>
          <div style="display: flex; flex-direction: row;">
            <p id="supp2" style=" color: rgb(180, 180, 180);">Creators:</p><p id="supp4" id="Creators"  style="margin-left: 7px;">Derek Simonds</p>
          </div>

         </div>

        </div>`;
            parentDiv.appendChild(newContent);
          document.getElementById("film-title").className = "film-title fade-in"
          document.getElementById("Tags").className = "Tags fade-in"
          document.getElementById("desc").className = "desc fade-in"
          document.getElementById("supp1").className = "fade-in"
          document.getElementById("supp2").className = "fade-in"
          document.getElementById("supp3").className = "fade-in"
          document.getElementById("supp4").className = "fade-in"

          
          document.getElementById("cont-home").className = "content-home";
          document.getElementById("f-logo").className = "film-logo fade-in";
          document.getElementById("f-logo").src= "movies logos/The-sinner-tv-logo-removebg-preview.png";
          document.getElementById("play-btn").className = "play fade-in"
          document.getElementById("info-btn").className = "More-info fade-in"
          animationInProgress = false;
        }, 500);
        
        
      }, 1000);
      
      t = 0;
    }
    
    nb_BG = t;
    
  }