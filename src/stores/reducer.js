import authors from "../data";

const initialState = {
  authors: authors,
  newAuthorId: 50
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        newAuthorId: state.newAuthorId + 1
      };
    case "DELETE_AUTHOR":
      const authorID = action.payload;
      const newarr = state.authors.filter(author => author.id !== authorID);
      console.log(newarr);
      return {
        ...state,
        authors: newarr
      };
    default:
      return state;
  }
};
