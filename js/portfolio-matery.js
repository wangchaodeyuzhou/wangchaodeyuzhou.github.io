$(function(){
  var modalElement=document.getElementById('projectVideoModal');
  var video=document.getElementById('projectVideo');
  var title=document.getElementById('projectVideoTitle');
  document.getElementById('portfolioYear').textContent=new Date().getFullYear();
  var modal=M.Modal.init(modalElement,{opacity:.82,dismissible:true,onCloseEnd:function(){video.pause();video.removeAttribute('src');video.load();}});
  $('.video-trigger').on('click',function(){
    title.textContent=this.dataset.title;
    video.setAttribute('aria-label',this.dataset.title+'项目演示视频');
    video.src=this.dataset.video;
    modal.open();
    video.play().catch(function(){});
  });
  $('#projectVideoModal .modal-close').on('click',function(){modal.close();});
  if(location.hash){window.addEventListener('load',function(){setTimeout(function(){var target=document.querySelector(location.hash);if(target){target.scrollIntoView();window.dispatchEvent(new Event('scroll'));if(window.AOS){AOS.refresh();}}},250);});}
});