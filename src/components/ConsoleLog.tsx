const ConsoleLog = ({ children }: any): any => {
  // tslint:disable-next-line: no-console
  console.log(children);
  return false;
};

export default ConsoleLog;
