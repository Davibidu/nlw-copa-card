let isIgnite = false
function changeCard(event) {
 const card = event.currentTarget
 const bg = isIgnite
   ? "Explorer"
   : "Ignite"
isIgnite = !isIgnite
card.style.backgroundImage = `url(./assets/${bg}.svg)`
}