const saveToLocalStorage = (state) => {
  try{
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
  }catch(error){
      console.log(error)
  }
}
const loadFromLocalStorage = () => {
  try{
      const serializedState = localStorage.getItem('state')
      if(serializedState === null) return undefined
  }catch (e) {
      console.log(e)
      return undefined
  }
}


export {
    saveToLocalStorage,
    loadFromLocalStorage

}

