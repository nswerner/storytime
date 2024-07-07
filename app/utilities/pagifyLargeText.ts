const splitTextIntoPages = (text: string, maxLength: number) => {
  const sentences = text.split('. '); // Split the text into sentences
  const pages = [];
  let currentPage = '';

  for (const sentence of sentences) {
    if ((currentPage + sentence).length > maxLength) {
      pages.push(currentPage.trim());
      currentPage = sentence + '. ';
    } else {
      currentPage += sentence + '. ';
    }
  }

  // Add the last page if it has content
  if (currentPage.trim().length > 0) {
    pages.push(currentPage.trim());
  }

  return pages;
};

export default splitTextIntoPages;
