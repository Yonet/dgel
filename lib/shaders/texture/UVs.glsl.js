const VERTEX_VARIABLES =
/*glsl*/
`
#ifdef UV
in vec2 aUv;
out vec2 vUv;
#endif
`;
const VERTEX_MAIN =
/*glsl*/
`
#ifdef UV
vUv = aUv;
#endif
`;
const FRAGMENT_VARIABLES =
/*glsl*/
`
#ifdef UV
in vec2 vUv;
#endif
`;
export default {
  VERTEX_VARIABLES,
  VERTEX_MAIN,
  FRAGMENT_VARIABLES
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFkZXJzL3RleHR1cmUvVVZzLmdsc2wudHMiXSwibmFtZXMiOlsiVkVSVEVYX1ZBUklBQkxFUyIsIlZFUlRFWF9NQUlOIiwiRlJBR01FTlRfVkFSSUFCTEVTIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxnQkFBZ0I7QUFBRztBQUFVOzs7OztDQUFuQztBQU9BLE1BQU1DLFdBQVc7QUFBRztBQUFVOzs7O0NBQTlCO0FBTUEsTUFBTUMsa0JBQWtCO0FBQUc7QUFBVTs7OztDQUFyQztBQU1BLGVBQWU7QUFBRUYsRUFBQUEsZ0JBQUY7QUFBb0JDLEVBQUFBLFdBQXBCO0FBQWlDQyxFQUFBQTtBQUFqQyxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVkVSVEVYX1ZBUklBQkxFUyA9IC8qZ2xzbCovIGBcbiNpZmRlZiBVVlxuaW4gdmVjMiBhVXY7XG5vdXQgdmVjMiB2VXY7XG4jZW5kaWZcbmA7XG5cbmNvbnN0IFZFUlRFWF9NQUlOID0gLypnbHNsKi8gYFxuI2lmZGVmIFVWXG52VXYgPSBhVXY7XG4jZW5kaWZcbmA7XG5cbmNvbnN0IEZSQUdNRU5UX1ZBUklBQkxFUyA9IC8qZ2xzbCovIGBcbiNpZmRlZiBVVlxuaW4gdmVjMiB2VXY7XG4jZW5kaWZcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHsgVkVSVEVYX1ZBUklBQkxFUywgVkVSVEVYX01BSU4sIEZSQUdNRU5UX1ZBUklBQkxFUyB9O1xuIl19