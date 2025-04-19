function groupByCategory(items, categoryKey) {
  const grouped = {};

  for (const item of items) {
    const key = item[categoryKey];

    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  }

  return grouped;
}

// Example usage:
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'T-Shirt', category: 'Apparel', price: 25 },
  { name: 'Mouse', category: 'Electronics', price: 30 },
  { name: 'Jeans', category: 'Apparel', price: 70 },
];

const groupedProducts = groupByCategory(products, 'category');

console.log(groupedProducts);