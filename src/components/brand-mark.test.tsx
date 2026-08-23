import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandMark } from "./brand-mark";

describe("BrandMark", () => {
  it("renders the logo with an accessible name", () => {
    render(<BrandMark />);
    expect(screen.getByText("Lambda House")).toBeInTheDocument();
  });

  it("does not duplicate the chapter mark next to the logo", () => {
    render(<BrandMark />);
    expect(screen.queryByText("λ / KNP")).not.toBeInTheDocument();
  });
});
