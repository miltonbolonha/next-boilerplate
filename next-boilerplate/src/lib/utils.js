// a function to calculate reading time
export const timeToRead = text => {
  const words = text.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return `${minutes} min de leitura`;
};

// a function to return only unique values
export const unique = (val, index, self) => {
  return self.indexOf(val) === index;
};
//  /theme-folder or ''
export const slugPrefix = process.env.IS_GITHUB_PAGE
  ? "/" + process.env.THEME_FOLDER
  : "";
