import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";

const links = {
  joinFormUrl: "https://forms.gle/AWaG97XPs3LoUaXW9",
  rsvpFormUrl: "https://lu.ma/thelambdahouse",
  socialUrl: "https://www.instagram.com/thelambdahouse",
  siteUrl: "https://www.thelambdahouse.com",
};

describe("Hero", () => {
  it("offers joining and meetup actions once RSVP is open", () => {
    render(<Hero links={links} />);
    expect(
      screen.getByRole("heading", { name: "Kanpur, come talk tech with us." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Attend the first meetup" }),
    ).toHaveAttribute("href", links.rsvpFormUrl);
    expect(
      screen.getByRole("link", { name: "Join Lambda House" }),
    ).toHaveAttribute("href", links.joinFormUrl);
  });

  it("opens external forms safely in a new tab", () => {
    render(<Hero links={links} />);
    const rsvp = screen.getByRole("link", { name: "Attend the first meetup" });
    expect(rsvp).toHaveAttribute("target", "_blank");
    expect(rsvp).toHaveAttribute("rel", "noreferrer");
  });

  it("promotes joining and never shows a dead RSVP link before RSVP opens", () => {
    render(<Hero links={{ ...links, rsvpFormUrl: null }} />);
    expect(
      screen.getByRole("link", { name: "Join Lambda House" }),
    ).toHaveAttribute("href", links.joinFormUrl);
    expect(
      screen.queryByRole("link", { name: "Attend the first meetup" }),
    ).not.toBeInTheDocument();
  });
});
