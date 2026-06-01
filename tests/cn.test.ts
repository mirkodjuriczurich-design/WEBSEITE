import { describe, it, expect } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins simple class strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignores falsy values", () => {
    expect(cn("a", null, undefined, false, "b")).toBe("a b");
  });

  it("merges conflicting tailwind classes — later wins", () => {
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("accepts arrays and objects (clsx semantics)", () => {
    expect(cn(["a", { b: true, c: false }, "d"])).toBe("a b d");
  });
});
