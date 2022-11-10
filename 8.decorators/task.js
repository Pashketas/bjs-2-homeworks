function cachingDecoratorNew(func) {
  let cache = [];
  return function(...args) {
    const hash = args.join(',')
  if (cache.find(item => item.hash === hash)) {
    const result = cache[cache.findIndex(item => item.hash === hash)].value;
    console.log ("Из кэша: " + result);
    return "Из кэша: " + result;
  } else if (cache.length === 5) {
      cache.shift();
  }
  const result = func(...args)
  cache.push({hash: hash, value: result})
  console.log ("Вычисляем: " + result);
  return "Вычисляем: " + result;
  }
}

sum = (...args) => args.reduce((acc, item) => acc + item, 0);
cachedSum = cachingDecoratorNew(sum);

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  
  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    } else {
      clearTimeout(timeoutId);
    }


    timeoutId = setTimeout(() => {
      wrapper.count++;
      console.log(func(...args))
    }, delay);
  }

  return wrapper;
}