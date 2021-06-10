console.log('Client-side code running');
const hotURL = 'https://old.reddit.com/r/gonewildaudio/hot.json?limit=100'
const topURL = 'https://old.reddit.com/r/gonewildaudio/top.json?limit=100'
const newURL = 'https://old.reddit.com/r/gonewildaudio/new.json?limit=100'
const F4MURL = 'https://old.reddit.com/r/gonewildaudio/search.json?q=title%3A%28f4m+OR+f4a+NOT+%22script+offer%22%29&restrict_sr=on&include_over_18=on&sort=new&t=all&limit=100'
const M4FURL = 'https://old.reddit.com/r/gonewildaudio/search.json?q=title%3A(m4f+OR+m4a+NOT+%22script+offer%22)&restrict_sr=on&include_over_18=on&sort=new&t=all&limit=100'




async function func(app, url) {
  const subreddit = url;
let subRedditFetch = await fetch(subreddit);
let subRedditJson = await subRedditFetch.json();
let children = subRedditJson.data.children;
for(let i =0; i<children.length;i++){
  let info = children[i].data;
  let self = info.selftext
  let gasm_url = "";
  let title = info.title;
  let reddit_url = info.url;
 if(info.url_overridden_by_dest!=undefined){
   gasm_url = info.url_overridden_by_dest;
 
 } 
 else{
 gasm_url = selfToLink(self);
 
  }
  if(gasm_url.length!=0){
  app.insertAdjacentHTML('afterend', `<a href="${reddit_url}"> ${title} </a><br>
  <iframe id="iframe" src="${gasm_url}" title="W3Schools Free Online Web Tutorials" width="470" height="110" style="overflow:auto;border:5px ridge black"></iframe>
  <hr>`);}
 }
 
 
};
function selfToLink(self){
  if(self.length==0||!self.includes("https://soundgasm.net")){
    return ""
  }
 let str = self.substring(self.indexOf("https://soundgasm.net"), self.length);
 if(str.includes('\n')){
   str = str.substring(0,str.indexOf('\n'))
 }
 if(str.includes(')')){
   str = str.substring(0,str.indexOf(')'))
 }

  return str;
}


const app = document.getElementById('app'); 
func(app, F4MURL)







