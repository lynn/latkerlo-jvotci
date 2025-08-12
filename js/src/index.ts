/*
Copyright (c) 2023 Miao Liang (https://codeberg.org/tb148)
Licensed under the Apache License, Version 2.0

Modified by latkerlo (https://github.com/latkerlo), Copyright (c) 2023-2024
*/

export {
  BANNED_TRIPLES,
  FOLLOW_VOWEL_CLUSTERS,
  HYPHENS,
  INITIAL,
  MZ_VALID,
  START_VOWEL_CLUSTERS,
  VALID,
  ZIhEVLA_INITIAL,
} from "./data";
export {
  DecompositionError,
  InvalidClusterError,
  NoLujvoFoundError,
  NonLojbanCharacterError,
  NotBrivlaError,
  NotZihevlaError,
} from "./exceptions";
// Export types and enums
export type { bestLujvoMap } from "./jvozba";
// Export main functionality
export {
  combine,
  getLujvo,
  getLujvoFromList,
  getLujvoWithAnalytics,
  getRafsiForRafsi,
  getRafsiListList,
  processTanru,
  score,
  TosyType,
  tiebreak,
  updateCurrentBest,
} from "./jvozba";
export {
  compareLujvoPieces,
  getVeljvo,
  jvokaha,
  jvokaha2,
  scoreLujvo,
  searchSelrafsiFromRafsi,
  selrafsiListFromRafsiList,
} from "./katna";
export { RAFSI_LIST } from "./rafsi";
export {
  BrivlaType,
  ConsonantSetting,
  containsConsonant,
  isConsonant,
  isGismu,
  isGismuShape,
  isGlide,
  isOnlyLojbanCharacters,
  isValidRafsi,
  isVowel,
  isZihevlaInitialCluster,
  isZihevlaMiddleCluster,
  makeSettingsIterator,
  rafsiTarmi,
  splitVowelCluster,
  stripHyphens,
  Tarmi,
  tarmiIgnoringHyphen,
  YHyphenSetting,
} from "./tarmi";
export {
  analyseBrivla,
  checkZihevlaOrRafsi,
  getRafsiIndices,
  isBrivla,
  isGismuOrLujvo,
  isSlinkuhi,
  normalise,
} from "./tools";
