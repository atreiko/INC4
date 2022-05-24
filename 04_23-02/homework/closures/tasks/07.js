const foo = (object) => {
  const prefix = 'INC_';
  return () => (
    {
      id: Date.now(),
      name: `${ prefix + object.name }`,
    }
  )
}

const igor = {
  name: 'Igor'
}

const userIgor = foo(igor)

console.log(userIgor());