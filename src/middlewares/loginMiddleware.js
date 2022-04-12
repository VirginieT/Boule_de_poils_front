const loginMiddleware = (store) => (action) => (next) => (
  action(next)
);
export default loginMiddleware;
