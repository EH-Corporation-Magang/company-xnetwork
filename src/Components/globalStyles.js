import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: DM Sans;
    transition: all 0.50s linear;
  }

  h6 {
      color: ${({ theme }) => theme.h6};
  }

  .navbar-light .navbar-nav .nav-link {
    color: ${({ theme }) => theme.text};
  }

  .navbar-light .navbar-toggler {
    color: ${({ theme }) => theme.text};
  }

  .navbar-light .navbar-toggler-icon {
    background-image: ${({ theme }) => theme.icon};
  }
`