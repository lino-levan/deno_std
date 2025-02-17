// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

import { Comparator } from "./types.ts";
import { parseComparator } from "./parse_comparator.ts";
/**
 * Parses a comparator string into a valid Comparator or returns undefined if not valid.
 * @param comparator
 * @returns A valid Comparator or undefined
 *
 * @deprecated (will be removed in 0.214.0) Use {@linkcode tryParseRange} instead.
 */
export function tryParseComparator(
  comparator: string,
): Comparator | undefined {
  try {
    return parseComparator(comparator);
  } catch {
    return undefined;
  }
}
