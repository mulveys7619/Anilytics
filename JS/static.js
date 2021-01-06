import InstantSearch from "./InstantSearch.js";

const btnScrollToTop = document.querySelector("#btnScrollToTop");

function toTop()
{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
// On btnScrollToTop click(const created in index.js that is set to button with id = "btnScrollToTop"), execute toTop() function (smooth scrolls to the top of the page)
btnScrollToTop.addEventListener("click", function(){toTop()});


window.onscroll = function showScrollBtn()
{
 let scrollToTopBtn = document.getElementById("btnScrollToTop")
 const TOP_OFFSET = 1000
  if(pageYOffset >= TOP_OFFSET)
  {
    scrollToTopBtn.style.visibility="visible"
  }
  else
  {
    scrollToTopBtn.style.visibility="hidden"
  }
};


// Expand search bar on search icon click
// const searchBtn = document.getElementById("#search-icon-btn");

// function expandInputField()
// {
//   document.getElementById("#search-input-container").style.width = "450px"
//   document.getElementById("#search-input-area").style.width = "450px"
// }
// searchBtn.addEventListener("click",function(){expandInputField()})




