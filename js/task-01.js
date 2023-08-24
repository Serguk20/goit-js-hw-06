const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');


console.dir(`Number of categories: ${items.length}`);
 


items.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.dir(`Category: ${title}`);
  console.dir(`Elements: ${elements}`);
});







