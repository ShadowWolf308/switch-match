import { describe, expect, test } from "vitest";
import { match } from "../lib";

describe("SwitchMatch", () => {
	test("should match the first case", () => {
		expect(match("foo", [
			{
				case: "foo",
				onMatch: () => "bar",
			},
			{
				case: "baz",
				onMatch: () => "qux",
			},
		])).toEqual("bar");
	});

	test("should match the second case", () => {
		expect(match("baz", [
			{
				case: "foo",
				onMatch: () => "bar",
			},
			{
				case: "baz",
				onMatch: () => "qux",
			},
		])).toEqual("qux");
	});

	test("should return undefined", () => {
		expect(match("qux", [
			{
				case: "foo",
				onMatch: () => "bar",
			},
			{
				case: "baz",
				onMatch: () => "qux",
			},
		])).toBeUndefined();
	});

	test("should return the default case", () => {
		expect(match("qux", [
			{
				case: "foo",
				onMatch: () => "bar",
			},
			{
				case: "baz",
				onMatch: () => "qux",
			},
		], () => "default")).toEqual("default");
	});
});