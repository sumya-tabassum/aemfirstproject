
export default function decorate(block) {
  const rows = block.querySelectorAll('div');

  rows.forEach((row) => {
    row.style.backgroundColor = '#e3f2fd';
    row.style.padding = '10px';
    row.style.marginBottom = '10px';
  });
}
