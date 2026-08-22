import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { nextEvent } from "@/content/community";
import { NextEvent } from "./next-event";

describe("NextEvent", () => {
  it("shows fixed practical details", () => {
    render(
      <NextEvent event={nextEvent} rsvpUrl="https://lu.ma/thelambdahouse" />,
    );
    expect(screen.getByText("Sunday, September 6, 2026")).toBeInTheDocument();
    expect(screen.getByText("4:00–6:00 PM")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(
      screen.getByText("Kanpur · venue confirmation in progress"),
    ).toBeInTheDocument();
  });

  it("marks up the start time for machines", () => {
    const { container } = render(
      <NextEvent event={nextEvent} rsvpUrl="https://lu.ma/thelambdahouse" />,
    );
    const time = container.querySelector("time");
    expect(time).toHaveAttribute("dateTime", nextEvent.isoStart);
  });
});
