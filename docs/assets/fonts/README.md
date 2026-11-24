# Fonts

Self-hosted, subset to the characters this page uses. No request goes to Google
Fonts at runtime.

| File | Family | Weight | Size |
|---|---|---|---|
| `google-sans-latin.woff2` | Google Sans | 400–700 (variable) | 19.9 KB |
| `redaction-regular-latin.woff2` | Redaction | 400 | 10.8 KB |
| `jetbrains-mono-latin.woff2` | JetBrains Mono | 400–800 (variable) | 23.4 KB |

Sources:

- Google Sans, v76, from the Google Fonts API (`fonts.gstatic.com/s/googlesans`).
  Upstream: <https://github.com/googlefonts/googlesans>.
- Redaction, v1 (version 1.004), from the Google Fonts API
  (`fonts.gstatic.com/s/redaction`). Upstream:
  <https://github.com/jeremymickel/Redaction>.
- JetBrains Mono, v24, from the Google Fonts API
  (`fonts.gstatic.com/s/jetbrainsmono`). Upstream:
  <https://github.com/JetBrains/JetBrainsMono>.

All three are licensed under the SIL Open Font License 1.1. The licence texts are
in this folder.

## Subset

Made with fontTools 4.64.0 and brotli 1.2.1, hinting dropped, WOFF2 output. The
sans and serif keep Basic Latin, Latin-1, general punctuation, curly quotes,
en/em dashes, ellipsis, guillemets, arrow, and minus. The mono keeps Basic Latin
only, which covers every command on the page.

```bash
pyftsubset input.woff2 --flavor=woff2 --no-hinting \
  --unicodes="U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-201D,U+2026,U+2039-203A,U+2192,U+2212" \
  --layout-features="kern,liga,calt,ccmp,mark,mkmk,rvrn" \
  --output-file=google-sans-latin.woff2
```

Re-run the subset if the page copy starts using characters outside that range.
