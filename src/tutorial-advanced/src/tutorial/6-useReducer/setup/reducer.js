export const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'ADD_ITEM') {
    const newPeple = [...state.people, action.payload]
    return {
      ...state,
      people: newPeple,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' }
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'removed item',
    }
  }
  throw new Error('no matching action type')
}

