import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { nextEvent } from "@/content/community";
import { NextEvent } from "./next-event";

const joinUrl = "https://forms.gle/AWaG97XPs3LoUaXW9";
const rsvpUrl = "https://lu.ma/thelambdahouse";

describe("NextEvent", () => {
  it("shows fixed practical details", () => {
    render(
      <NextEvent event={nextEvent} rsvpUrl={rsvpUrl} joinUrl={joinUrl} />,
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
      <NextEvent event={nextEvent} rsvpUrl={rsvpUrl} joinUrl={joinUrl} />,
    );
    expect(container.querySelector("time")).toHaveAttribute(
      "dateTime",
      nextEvent.isoStart,
    );
  });

  it("falls back to joining, and says why, before RSVP opens", () => {
    render(<NextEvent event={nextEvent} rsvpUrl={null} joinUrl={joinUrl} />);
    expect(
      screen.queryByRole("link", { name: "RSVP for this meetup" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Join Lambda House" }),
    ).toHaveAttribute("href", joinUrl);
    expect(screen.getByText(nextEvent.rsvpPendingNote)).toBeInTheDocument();
  });
});
