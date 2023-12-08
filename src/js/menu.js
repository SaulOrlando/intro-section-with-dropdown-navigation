"use strict"

const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const fondo = document.querySelector("#fondo")
const close_menu_icon = document.querySelector("#close-menu")
const arrows = document.querySelectorAll(".arrow")
const menu_texts = document.querySelectorAll(".menu_text")

const close_menu = () => {
  fondo.style.height = "0"
  nav.style.translate = "100%"
}

const open_menu = () => {
  fondo.style.height = "100%"
  nav.style.translate = "-100%"
}

const turn_arrow = (element) => {
  element.classList.toggle("up")
  if (element.classList.contains("up")) {
    element.style.transform = "rotate(-180deg)"
  } else {
    element.style.transform = "rotate(0deg)"
  }
}

const rotate_arrow = (element) => {
  if (element.classList.contains("arrow")) {
    turn_arrow(element)
  } else {
    const element_sibling = element.nextElementSibling
    turn_arrow(element_sibling)
  }
}

menu.addEventListener("click", open_menu)

close_menu_icon.addEventListener("click", close_menu)

fondo.addEventListener("click", close_menu)

arrows.forEach(arrow_icon => {
  arrow_icon.addEventListener("click", () => {
    rotate_arrow(arrow_icon)
  })
})

menu_texts.forEach(menu_text => {
  menu_text.addEventListener("click", () => {
    rotate_arrow(menu_text)
  })
})
