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






// Expand search bar on search icon click
const searchBtn = document.getElementById("#search-icon-btn");

function expandInputField()
{
  document.getElementById("#search-input-container").style.width = "450px"
  document.getElementById("#search-input-area").style.width = "450px"
}
searchBtn.addEventListener("click",function(){expandInputField()})




