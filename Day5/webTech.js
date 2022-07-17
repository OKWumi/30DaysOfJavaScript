/*1.  ... create a separate file web_techs.js and store
      the webTechs array in tothis file.
*/

export const webTech=['HTML', 'JS', 'CSS']
console.log(webTech)

/*5.In the webTechs array check if Sass exists in the
    array and if it exists print 'Sass is a CSS
    preprocess'. If it does not exist add Sass to the
    array and print the array.
*/
let sass=webTech.includes('Sass')
if (sass){
    console.log('Sass is a CSS preprocess')
} else {
    console.log(webTech.push('Sass'))
}
  console.log(webTech)
