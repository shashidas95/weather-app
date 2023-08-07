function getFullName( firstName, lastName, title='') {
 return `${title} ${firstName} ${lastName} `;
}
const fullName = getFullName('Shashi', 'Das', 'Mr.')
console.log(fullName)