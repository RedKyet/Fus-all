const calarr=[["01-07-2021","Concordia Chiajna"],["03-07-2021","FC Chindia Târgoviște"]];
document.open()
for(var i=0;i<calarr.length;i++)
  {
    if(true)
    {
      document.write('<div class="card card',i,' style="background: url(https://media.hotnews.ro/media_server1/image-2020-02-5-23644031-41-victoria-are-chipul-lui-gica-hagi.jpg) center center no-repeat;background-repeat: no-repeat;background-size: contain;background-size: auto 100%; ""><div class="border"><h2>',calarr[i][1],'</h2><div class="icons"><i class="fa" aria-hidden="true"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_map_of_Romania.svg/1024px-Flag_map_of_Romania.svg.png" height="288" width="388"/></i></div></div></div>');
      
      var styleSheet = document.createElement("style");
styleSheet.innerText = '.card',i,'{background: url(https://media.hotnews.ro/media_server1/image-2020-02-5-23644031-41-victoria-are-chipul-lui-gica-hagi.jpg) center center no-repeat;background-repeat: no-repeat;background-size: contain;background-size: auto 100%; }.card',i,':hover{background: url(https://media.hotnews.ro/media_server1/image-2020-02-5-23644031-41-victoria-are-chipul-lui-gica-hagi.jpg) center center no-repeat;background-repeat: no-repeat;background-size: contain;background-size: auto 150%;}';
document.head.appendChild(styleSheet);
      // Create our stylesheet
var style = document.createElement('style');
style.innerHTML =
	'.card',i,'{background: url(https://media.hotnews.ro/media_server1/image-2020-02-5-23644031-41-victoria-are-chipul-lui-gica-hagi.jpg) center center no-repeat;background-repeat: no-repeat;background-size: contain;background-size: auto 100%; }.card',i,':hover{background: url(https://media.hotnews.ro/media_server1/image-2020-02-5-23644031-41-victoria-are-chipul-lui-gica-hagi.jpg) center center no-repeat;background-repeat: no-repeat;background-size: contain;background-size: auto 150%;}';

var ref = document.querySelector('script');

ref.parentNode.insertBefore(style, ref);

    }
    else
    {
      
    }
    
  }