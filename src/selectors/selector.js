/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
export const selectFilter = (products, filter) => {
  if (!products || products.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return products.filter((product) => {
    const isInRange = filter.maxYear
      ? (product.Year >= filter.minYear && product.Year <= filter.maxYear)
      : true;
    const matchKeyword = product.keywords ? product.keywords.includes(keyword) : true;
    // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
    const matchDescription = product.description
      ? product.description.toLowerCase().includes(keyword)
      : true;
    const matchartist = product.artist ? product.artist.toLowerCase().includes(filter.artist) : true;

    return ((matchKeyword || matchDescription) && matchartist && isInRange);
  }).sort((a, b) => {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'Year-desc') {
      return a.Year < b.Year ? 1 : -1;
    }

    return a.Year > b.Year ? 1 : -1;
  });
};

// Select product with highest Year
export const selectMax = (products) => {
  if (!products || products.length === 0) return 0;

  let high = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].Year > high.Year) {
      high = products[i];
    }
  }

  return Math.floor(high.Year);
};

// Select product with lowest Year
export const selectMin = (products) => {
  if (!products || products.length === 0) return 0;
  let low = products[0];

  for (let i = 0; i < products.length; i++) {
    if (products[i].Year < low.Year) {
      low = products[i];
    }
  }

  return Math.floor(low.Year);
};
