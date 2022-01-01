const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;
  rest.forEach((arg, index, args) => {
    if (arg.charAt(0) === "-") {
      if (index == args.length - 1) {
        res[arg.substring(1)] = true;
      } else if (args[index + 1].charAt(0) !== "-") {
        res[arg.substring(1)] = args[index + 1];
      } else {
        res[arg.substring(1)] = true;
      }
    }
  });
  return res;
};

export { getArgs };
