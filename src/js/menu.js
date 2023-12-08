"use strict"

const menu = document.querySelector("#menu")
const nav = document.querySelector("#nav")
const fondo = document.querySelector("#fondo")
const close_menu_icon = document.querySelector("#close-menu")
const arrows = document.querySelectorAll(".arrow")
const menu_texts = document.querySelectorAll(".menu_text")
const dropdown_texts = document.querySelectorAll(".dropdown-text")

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

const show_dropdown = (dropdown) => {
  dropdown.style.opacity = "1"
  dropdown.style.maxHeight = "fit-content"
}

const hidden_menu = (dropdown) => {
  dropdown.style.maxHeight = "0"
  dropdown.style.opacity = "0"
}

const toggle_dropdown = (dropdown_clickable) => {
  let dropdown
  let dropdown_text
  if (dropdown_clickable.classList.contains("dropdown-arrow")){
    dropdown = dropdown_clickable.nextElementSibling
    dropdown_text = dropdown_clickable.previousElementSibling
  }else{
    dropdown = dropdown_clickable.nextElementSibling.nextElementSibling
    dropdown_text = dropdown_clickable
  }
  dropdown_text.classList.toggle("active")
  if (dropdown_text.classList.contains("active")){
    show_dropdown(dropdown)
  }else {
    hidden_menu(dropdown)
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

dropdown_texts.forEach(dropdown_text => {
  dropdown_text.addEventListener("click", () => {
    toggle_dropdown(dropdown_text)
  })
})
