// SCROLL TO TOP BUTTON
const btnScrollToTop = document.querySelector("#btnScrollToTop");
window.onscroll = function showScrollBtn()
{
 const TOP_OFFSET = 1000
  if(pageYOffset >= TOP_OFFSET)
  {
    btnScrollToTop.style.visibility="visible"
  }
  else
  {
    btnScrollToTop.style.visibility="hidden"
  }
};
function toTop()
{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
btnScrollToTop.addEventListener("click", function(){toTop()});











