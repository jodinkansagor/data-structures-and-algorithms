

function start() {
  const tree = new Tree();
  for (let i = 0; i < 10; i++) {
    tree.add(Math.floor(Math.random(0, 100)));
  }
  console.log(tree);
};

start();
