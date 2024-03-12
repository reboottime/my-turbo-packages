import { renderHook, act } from "@testing-library/react";

import useCounter from "./use-counter";

it("should useCounter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);

  act(() => {
    result.current.increment();
  });

  // @notes: little trick, if you do not read the count value from result.current, 
  // the destructured value, ie, const { count } = result.current, will not be updated
  expect(result.current.count).toEqual(1);
});
