const getData = async (filePath) => {
  const data = await fetch(filePath)
  return await data.json()
}


const replaceAntlers = (className, placeholder, content) => {
  const element = document.querySelector(className)
  return element.innerText = element.innerText.replace(`{{ ${placeholder} }}`, content)
}





;(async function (){

  const fqmMeanings = await getData('assets/meanings.json')
  const fqmMeaning  = fqmMeanings[Math.floor(Math.random() * fqmMeanings.length)]

  return replaceAntlers('.js--replace-tagline', 'fqm-tagline', fqmMeaning)

})()
