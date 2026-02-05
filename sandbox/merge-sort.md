# Merge Sort

1. Compare the first elements
2. Take the smaller one
3. Move that pointer forward
4. Repeat
5. When one list is empty, copy the rest

## Illustration

A = [2, 5, 8]

B = [3, 6, 7]

[2, 3, 5, 6, 7, 8]

## The generic pairing formula

```
for (width = 1; width < n; width *= 2) {
  for (left = 0; left < n; left += 2 * width) {
    mid   = min(left + width, n)
    right = min(left + 2 * width, n)

    merge(left, mid, right)
  }
}
```
