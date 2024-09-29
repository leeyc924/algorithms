import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  textSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
});

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, button, input, select, textarea, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt,var,b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    color: 'inherit',
    fontFamily: 'inherit',
    fontSize: '100%',
    verticalAlign: 'baseline',
    background: 'none',
    fontStyle: 'normal',
  },
);

globalStyle('article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section', {
  display: 'block',
});

globalStyle('ol, ul, li, menu, summary', {
  listStyle: 'none',
});

globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:before, q:before, blockquote:after, q:after', {
  content: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
});
