function newsTicker(keywords,numberToShow,tagText,tagLink,tagColor,tagImage) {
  const url = 'https://api.nba.net/2/pacers/article,video/?freeform=' + keywords;
  fetch(url, {
    // headers: {
    //   'accessToken': 'internal|bb88df6b4c2244e78822812cecf1ee1b',
    // }
  })
  .then((resp) => resp.json())
  .then(function(data) {
    let items = data.response.result,
    i = 0,
    output = '',
    ns = numberToShow;

    let divContain = document.createElement("div");
    divContain.className = "tickercontain";
    let divTag = document.createElement("a");
    if (tagLink) {
      divTag.href = tagLink;
    }
    if (tagColor) {
      divTag.style.background = tagColor;
    }

    divTag.setAttribute('target', '_blank');
    divTag.className = "divTag";

    if (tagImage) {
      let divImage = document.createElement("img");
      divImage.setAttribute('src', tagImage);
      divTag.appendChild(divImage);
    }

    divTag.innerHTML += tagText;
    document.getElementById('newsTicker').appendChild(divTag);
    document.getElementById('newsTicker').appendChild(divContain);



    items.forEach(function(item) {
      output += `<div class="post"><a href="${item.url}">${item.headline}</a></div>`;
      i++;
      if (i == ns) {
        document.querySelector('.tickercontain').innerHTML = output;
      }
    });
    slideInit();
  });
}

function slideInit() {
  const slidelist = document.getElementById('newsTicker');

  setInterval(function(){
    slidelist.className = "full";
  },1000); 
  
  let ul = document.createElement("ul");
  ul.className = 'slide-nav';
  slidelist.appendChild(ul);
  for (var i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    if (i == 1) {
      li.setAttribute('id','prev-slide');
    } else if (i == 2) {
      li.setAttribute('id','pause');
    } else {
      li.setAttribute('id','next-slide');
    }
    let icon = document.createElement("i");
    let icon2 = document.createElement("i");

    if (i == 1) {
      icon.className = "fas fa-chevron-left";
    } else if (i == 2) {
      icon.className = "fas fa-pause";
      icon2.className = "fas fa-play";
    } else {
      icon.className = "fas fa-chevron-right";
    }
    if (i == 2) {
      li.appendChild(icon);
      li.appendChild(icon2);
    } else {
      li.appendChild(icon);
    }
    ul.appendChild(li);
  }

  let progress = document.createElement("div");
  progress.setAttribute('id','progress');
  slidelist.appendChild(progress);

  if (slidelist != null ) {
    let slides = document.querySelectorAll('.post'),
    slideCount = slides.length,
    currentSlide = 0,
    slideHeight = null,
    initialHeight = slides[0].clientHeight;

    slides[0].classList.add('active');

    function moveToSlide(n) {
      slides[currentSlide].className = 'post';
      currentSlide = (n+slideCount)%slideCount;
      slides[currentSlide].className = 'post active';
      slideHeight = slides[currentSlide].clientHeight;
      slidelist.style.height = slideHeight + 'px';
      window.addEventListener('resize', function(){
        resizedSlideHeight = slides[currentSlide].clientHeight;
        slidelist.style.height = resizedSlideHeight + 'px';
      });
    }

    function nextSlide(e){
      moveToSlide(currentSlide+1);
    };
    function prevSlide(e){
      moveToSlide(currentSlide+-1);
    };

    const slideHandlers = {
      nextSlide: function(element){
        document.querySelector(element).addEventListener('click',nextSlide);
        document.body.addEventListener('keydown',nextSlide, false);
      },
      prevSlide: function(element){
        document.querySelector(element).addEventListener('click',prevSlide);
        document.body.addEventListener('keydown',prevSlide, false);
      }
    }

    slideHandlers.nextSlide('#next-slide');
    slideHandlers.prevSlide('#prev-slide');

    // Dynamic slidelist height
    slidelist.style.height = initialHeight + 'px';

    window.addEventListener('resize', function(){
      let resizedHeight = slides[0].clientHeight;
      slidelist.style.height = resizedHeight + 'px';
    });

    let initialX = null;
    let initialY = null;
    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };
    function moveTouch(e) {
      if (initialX === null) {
        return;
      }
      if (initialY === null) {
        return;
      }
      let currentX = e.touches[0].clientX;
      let currentY = e.touches[0].clientY;
      let diffX = initialX - currentX;
      let diffY = initialY - currentY;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          moveToSlide(currentSlide+1);
        } else {
          moveToSlide(currentSlide+-1);
        }
      }
      initialX = null;
      initialY = null;
      e.preventDefault();
    };

    slidelist.addEventListener("touchstart", startTouch, false);
    slidelist.addEventListener("touchmove", moveTouch, false);

    let seconds = 0
    const timer = new Timer(() => {
      seconds++
      progressWidth = (seconds / 8) * 100;
      progress.style.width = progressWidth + "%";

      if (seconds === 8) {
        timer.clear();
        seconds = 0;
        timer.resume();
        setTimeout(() => {
          slidelist.className = "reset";
          nextSlide();
        }, 1000);
      }
    }, 1000)

    let actionContain = document.getElementById('pause');

    actionContain.addEventListener("click", function() {
      if (actionContain.classList.contains("paused")) {
          timer.resume();
          actionContain.className = '';
          actionContain.querySelector('.fa-pause').style.display = "block";
          actionContain.querySelector('.fa-play').style.display = "none";
      } else {
          timer.pause();
          actionContain.className = 'paused';
          actionContain.querySelector('.fa-pause').style.display = "none";
          actionContain.querySelector('.fa-play').style.display = "block";
      }
    });

    

    function Timer (callback, delay) {
      let callbackStartTime
      let remaining = 0

      this.timerId = null
      this.paused = false

      this.pause = () => {
        this.clear()
        remaining -= Date.now() - callbackStartTime
        this.paused = true
      }
      this.resume = () => {
        window.setTimeout(this.setTimeout.bind(this), remaining)
        this.paused = false
      }
      this.setTimeout = () => {
        this.clear()
        this.timerId = window.setInterval(() => {
          callbackStartTime = Date.now()
          callback()
        }, delay)
      }
      this.clear = () => {
        window.clearInterval(this.timerId)
      }

      this.setTimeout()
    }

  }
}