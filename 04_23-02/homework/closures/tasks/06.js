const create = (title) => {
  return () => {
    switch (title) {
      case 'developer': 
      return ( 
        {
          category: 'developer',
          login: 'Default login',
          password: 'Default password'
        }
      )
      case 'user': 
      return (
        {
          category: 'user',
          firstName: 'Default name',
          secondName: 'Default surname'
        }
      )
      default: title
    }
  }
}

const developer = create('developer')
const user = create('user')
const HR = create('HR')

const hollyHolm = developer()
const jessicaSmith = user()
const bryceMitchel = HR()

console.log(hollyHolm);
console.log(jessicaSmith)
console.log(bryceMitchel);