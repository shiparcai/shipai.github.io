// Slow presentation of elements.

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.scroll_animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  let options1 = { threshold: [0.5] };
  let observer1 = new IntersectionObserver(onEntry, options1);
  let elements1 = document.querySelectorAll('.scroll_animation_right');
  for (let elm of elements1) {
    observer1.observe(elm);
  }

  let options2 = { threshold: [0.5] };
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.scroll_animation_left');
  for (let elm of elements2) {
    observer2.observe(elm);
  }