const getData = async (fileURI) => {
  try {
    const data = await fetch(fileURI)
    return await data.json()
  }
  catch (error) { throw new Error(`Couldn't fetch data: ${error}`) }
}


const replaceAntlers = (className, placeholder, content) => {
  const element = document.querySelector(className)
  return element.innerText = element.innerText.replace(`{{ ${placeholder} }}`, content)
}





;(async function (){

  const fqmMeanings = await getData('assets/meanings.json')
  const fqmMeaning  = fqmMeanings[Math.floor(Math.random() * fqmMeanings.length)]

  return replaceAntlers('.js--replace-tagline', 'Flex Queue Madness', fqmMeaning)

})()
