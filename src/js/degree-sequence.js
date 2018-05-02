function isDegreeSequence(argument) {
  if (!(argument instanceof Array) || argument.length === 0) return false;

  const sequence = Array.from(argument).sort((a, b) => b - a);
  const max = sequence[0];
  const min = sequence[sequence.length - 1];

  if (max >= sequence.length || min < 0) return false;

  if (max === 0) return true;

  return isDegreeSequence([
    ...sequence.slice(1, max + 1).map(d => d - 1),
    ...sequence.slice(max + 1)
  ]);
}