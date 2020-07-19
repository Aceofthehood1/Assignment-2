function genQuote() {
    let randNum = Math.floor(Math.random() * 7) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    let tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
  }
  
  //quote array
  let quotes = [/*"Blank"*/, "\"When something is important enough, you do it even if the odds are not in your favor\" - Elon Musk", "\"Success is a lousy teacher. It seduces smart people into thinking they can’t lose.\"- Bill Gates", "\"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.\"- Henry James", "\"One of the only ways to get out of a tight box is to invent your way out.\"- Jeff Bezos", "\"Don’t compare yourself with anyone this world. If you do so, you are insulting yourself\"- Bill Gates", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"- Muhammad Ali", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"- Bruce Lee",];
  