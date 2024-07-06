const splitTextIntoPages = (text: string, maxLength: number) => {
  const words = text.split(/\s+/); // Split the text into words
  const pages = [];
  let currentPage = '';

  for (const word of words) {
    if ((currentPage + word).length > maxLength) {
      pages.push(currentPage.trim());
      currentPage = word + ' ';
    } else {
      currentPage += word + ' ';
    }
  }

  // Add the last page if it has content
  if (currentPage.trim().length > 0) {
    pages.push(currentPage.trim());
  }

  return pages;
};

export default splitTextIntoPages;
