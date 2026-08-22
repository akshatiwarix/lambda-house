import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";

const links = {
  joinFormUrl: "https://forms.google.com/join",
  rsvpFormUrl: "https://lu.ma/thelambdahouse",
  socialUrl: "https://www.instagram.com/thelambdahouse",
  siteUrl: "https://www.thelambdahouse.com",
};

describe("Hero", () => {
  it("offers joining and meetup actions", () => {
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
});
