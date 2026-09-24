import { createGlobalStyle, css } from 'styled-components';
import GlobalStyle from '@paljs/ui/GlobalStyle';
import { breakpointDown } from '@paljs/ui/breakpoints';

const SimpleLayout = createGlobalStyle`
${({ theme }) => css`
  ${GlobalStyle}
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a,
  button,
  input,
  select,
  textarea {
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease,
      box-shadow 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
  }

  a {
    transition-property: color, opacity;
  }

  button:not(:disabled),
  a {
    &:hover {
      opacity: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  .column.small {
    flex: 0.15 !important;
  }

  .auth-layout {
    .main-content {
      padding: 2.5rem;
      ${breakpointDown('sm')`
        padding: 0;
      `}
    }
  }

  aside.settings-sidebar {
    transition: transform 0.3s ease;
    width: 19rem;
    overflow: hidden;
    transform: translateX(${theme.dir === 'rtl' && '-'}100%);
    &.start {
      transform: translateX(${theme.dir === 'ltr' && '-'}100%);
    }

    &.expanded,
    &.expanded.start {
      transform: translateX(0);
    }

    .scrollable {
      width: 19rem;
      padding: 3.4rem 0.25rem;
    }

    .main-container {
      width: 19rem;
      transition: width 0.3s ease;
      overflow: hidden;

      .scrollable {
        width: 19rem;
      }
    }
  }

  ${breakpointDown('xs')`
    .main-content {
        padding: 0.75rem !important;
      }
  `}

  .with-margin {
    margin: 0 0.75rem 2rem 0;
  }
  .inline-block {
    display: inline-block;
  }
  .popover-card {
    margin-bottom: 0;
    width: 300px;
    box-shadow: none;
  }
  .btn {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 500;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
  .ck-content {
    min-height: 20rem;
  }
`}
`;
export default SimpleLayout;
