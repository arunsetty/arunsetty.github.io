---
layout: page
title: About Me
permalink: /about
---


<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<link href="//fonts.googleapis.com/css?family=Mansalva" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet">

<h1 style="font-family: 'Fredericka the Great', cursive; text-align: center;" class="ml2">This site was initiated by extreme boredom and fuelled by lack of interest in reality.</h1>
<div style="padding: 3%">
    <h4>Hi Stranger(?). If you are here, you are probably too free or in lesser probability, you wanted to know about me. Anyhoo, I'll try not to bore your way down the page as much as I can.</h4>
    <h4>I believe that anyone can be described with the help of three W's. I'll try to do that here.</h4>
    <ol>
        <li>Who(am I?)</li>
        <p>Name is Arun Setty Kodavali (<b><i>ASK</i></b> as given by someone special). </p>
        <ul style="font-family: Mansalva; font-size: medium;">
            <li>A <b><i>Writer</i></b> by heart. You can find me here weaving magic with words.</li>
            <li>Quite a <b><i>Reader</i></b> but prefer creating my own than coping up with someone else's. You may find some pieces of my writings <a href="/scribbles" target="_blank">here</a>.</li>
            <li><b><i>Philospoher</i></b> at times. You can expect some motivational content too :p</li>
            <li>Fan of Quotes and Ironies...You can see a bunch of them making their way here.</li>
            <li>Occasional Photographer...You can find nature blossoming(and withering) here.</li>
        </ul>
        <br />
        <li>What(do I do?)</li>
        <p>Presently pursuing my Bachelors at IIT Bombay in Computer Sciences.</p>
        <ul style="font-family: Mansalva; font-size: medium;">
            <li>I build tech.</li>
            <li>I watch movies and series extensively.</li>
            <li>I talk with my friends whenever they are free 😅</li>
            <li>I participate in conversations, not debates.</li>
        </ul>
        <br />
        <li>Where(am I headed?)</li>
        <p>I'll let you know as soon as I figure it out.</p>
        <br />
    </ol>
    <h4>So, I hope you understand that I'm as confused as the next guy in my life. Before I forget, <a href="https://www.cse.iitb.ac.in/~arunsetty/" target="_blank">this</a> is the first website I created as a part of my assignment... so lame ;-(</h4>
</div>

<!-- <div id="myDiv" style="display:none">jQuery is fun</div> 
<script>
setTimeout(function(){ $("#myDiv").show(); }, 1500); 
</script> -->

<script>
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>