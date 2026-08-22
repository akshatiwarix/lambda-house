import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandMark } from "./brand-mark";

describe("BrandMark", () => {
  it("renders the approved temporary chapter mark", () => {
    render(<BrandMark />);
    expect(screen.getByText("Lambda House")).toBeInTheDocument();
    expect(screen.getByText("λ / KNP")).toBeInTheDocument();
  });
});
