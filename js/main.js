

setInterval(isScrolledIntoView,2000);

function isScrolledIntoView()
{
  var element = document.getElementById("fg");
  const rect = element.getBoundingClientRect();
    if(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
    {
      element.classList.remove("animateBar");
      element.classList.add("animaeBar");
    }
}
