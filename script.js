// JavaScript functionality for E-Shop

document.querySelector('#more-info-btn').addEventListener('click', () => {
    alert('More Info will be available soon!');
  });
  
  document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });
  
  document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
      alert('Proceeding to checkout!');
    });
  });
  