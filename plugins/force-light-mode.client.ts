// Force light mode by adding a class to the HTML element
export default defineNuxtPlugin(() => {
  // Add light class to HTML element
  document.documentElement.classList.add('light')
  document.documentElement.classList.remove('dark')
  
  // Set color scheme meta tag
  const meta = document.createElement('meta')
  meta.name = 'color-scheme'
  meta.content = 'light'
  document.head.appendChild(meta)
  
  // Set theme color
  const themeColor = document.createElement('meta')
  themeColor.name = 'theme-color'
  themeColor.content = '#ffffff'
  document.head.appendChild(themeColor)
})
